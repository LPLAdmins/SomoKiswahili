-- Fix security vulnerability: Restrict profiles table access
-- Drop the overly permissive policy that allows public access to all profiles
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Create a secure policy that only allows users to view their own profile
CREATE POLICY "Users can view own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = id);

-- For public tutor information needs, create a secure view with limited data
CREATE OR REPLACE VIEW public.tutor_profiles AS
SELECT 
  p.id,
  p.full_name,
  p.avatar_url,
  t.bio,
  t.specialization,
  t.languages,
  t.hourly_rate,
  t.rating,
  t.experience_years,
  t.is_verified,
  t.is_active
FROM public.profiles p
INNER JOIN public.tutors t ON t.profile_id = p.id
WHERE t.is_active = true;

-- Grant public read access to the tutor profiles view only
GRANT SELECT ON public.tutor_profiles TO anon, authenticated;