import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dzmbapoxugmhituwjjca.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6bWJhcG94dWdtaGl0dXdqamNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MDI2NzMsImV4cCI6MjA2MjI3ODY3M30.979aKcZwQS2bditXoqTFW-1BnV-AhJMWasFXNGkO_oc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
