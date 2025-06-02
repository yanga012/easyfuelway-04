
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  full_name: string;
  id_number: string;
  id_verified: boolean;
  phone_number?: string;
  address?: string;
  driver_license?: string;
  platform: string;
}

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  registration_number: string;
  fuel_tank_capacity: number;
  fuel_type: string;
  verified: boolean;
}

interface FuelCredits {
  id: string;
  balance: number;
  credit_limit: number;
  last_updated: string;
}

interface ProfileContextType {
  profile: UserProfile | null;
  vehicles: Vehicle[];
  fuelCredits: FuelCredits | null;
  loading: boolean;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  addVehicle: (vehicle: Omit<Vehicle, 'id' | 'verified'>) => Promise<void>;
  refreshData: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [fuelCredits, setFuelCredits] = useState<FuelCredits | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        console.error('Error fetching profile:', profileError);
        return;
      }

      setProfile(profileData);
    } catch (error) {
      console.error('Error in fetchProfile:', error);
    }
  };

  const fetchVehicles = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching vehicles:', error);
        return;
      }

      setVehicles(data || []);
    } catch (error) {
      console.error('Error in fetchVehicles:', error);
    }
  };

  const fetchFuelCredits = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('fuel_credits')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching fuel credits:', error);
        return;
      }

      setFuelCredits(data);
    } catch (error) {
      console.error('Error in fetchFuelCredits:', error);
    }
  };

  const refreshData = async () => {
    setLoading(true);
    await Promise.all([fetchProfile(), fetchVehicles(), fetchFuelCredits()]);
    setLoading(false);
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_profiles')
        .upsert({ id: user.id, ...data });

      if (error) throw error;
      await fetchProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  const addVehicle = async (vehicleData: Omit<Vehicle, 'id' | 'verified'>) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('vehicles')
        .insert({ ...vehicleData, user_id: user.id });

      if (error) throw error;
      await fetchVehicles();
    } catch (error) {
      console.error('Error adding vehicle:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (user) {
      refreshData();
    } else {
      setProfile(null);
      setVehicles([]);
      setFuelCredits(null);
      setLoading(false);
    }
  }, [user]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        vehicles,
        fuelCredits,
        loading,
        updateProfile,
        addVehicle,
        refreshData,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
