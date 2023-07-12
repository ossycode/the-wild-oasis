import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bsztrcswuwtbhvkbudss.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzenRyY3N3dXd0Ymh2a2J1ZHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1NjcxNTksImV4cCI6MjAwNDE0MzE1OX0.K2Yrx_a4ayV61zV4byDnDptP21W3DAubgKfOKm4vdK0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
