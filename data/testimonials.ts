import { supabase } from "@/app/lib/supabase";
import type { Testimonial } from "@/types/testimonial";

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching testimonials:", error.message);
    return [];
  }

  return data as Testimonial[];
}
