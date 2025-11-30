-- Create photos table
CREATE TABLE public.photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create automations table
CREATE TABLE public.automations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  tools TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL CHECK (service_type IN ('fotografia', 'automacao')),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for photos (public read, admin write for future)
CREATE POLICY "Anyone can view photos"
ON public.photos
FOR SELECT
USING (true);

-- RLS Policies for automations (public read, admin write for future)
CREATE POLICY "Anyone can view automations"
ON public.automations
FOR SELECT
USING (true);

-- RLS Policies for contact_messages (anyone can insert, admin can view for future)
CREATE POLICY "Anyone can submit contact messages"
ON public.contact_messages
FOR INSERT
WITH CHECK (true);

-- Create storage bucket for portfolio images
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio', 'portfolio', true);

-- Storage policies for portfolio bucket
CREATE POLICY "Anyone can view portfolio images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'portfolio');

-- Add indexes for better performance
CREATE INDEX idx_photos_created_at ON public.photos(created_at DESC);
CREATE INDEX idx_automations_created_at ON public.automations(created_at DESC);
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);