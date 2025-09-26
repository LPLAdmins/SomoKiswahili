export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          achievement_type: string
          badge_url: string | null
          description: string | null
          earned_at: string
          id: string
          title: string
          user_id: string | null
        }
        Insert: {
          achievement_type: string
          badge_url?: string | null
          description?: string | null
          earned_at?: string
          id?: string
          title: string
          user_id?: string | null
        }
        Update: {
          achievement_type?: string
          badge_url?: string | null
          description?: string | null
          earned_at?: string
          id?: string
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "achievements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          created_at: string
          duration_minutes: number | null
          id: string
          notes: string | null
          session_date: string
          status: string | null
          student_id: string | null
          total_cost: number
          tutor_id: string | null
        }
        Insert: {
          created_at?: string
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          session_date: string
          status?: string | null
          student_id?: string | null
          total_cost: number
          tutor_id?: string | null
        }
        Update: {
          created_at?: string
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          session_date?: string
          status?: string | null
          student_id?: string | null
          total_cost?: number
          tutor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_tutor_id_fkey"
            columns: ["tutor_id"]
            isOneToOne: false
            referencedRelation: "tutor_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_tutor_id_fkey"
            columns: ["tutor_id"]
            isOneToOne: false
            referencedRelation: "tutors"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          created_at: string
          description: string | null
          duration: string | null
          id: string
          image_url: string | null
          instructor_id: string | null
          is_free: boolean | null
          lesson_count: number | null
          level: string
          price: number | null
          rating: number | null
          skills: string[] | null
          student_count: number | null
          subtitle: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration?: string | null
          id?: string
          image_url?: string | null
          instructor_id?: string | null
          is_free?: boolean | null
          lesson_count?: number | null
          level: string
          price?: number | null
          rating?: number | null
          skills?: string[] | null
          student_count?: number | null
          subtitle?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration?: string | null
          id?: string
          image_url?: string | null
          instructor_id?: string | null
          is_free?: boolean | null
          lesson_count?: number | null
          level?: string
          price?: number | null
          rating?: number | null
          skills?: string[] | null
          student_count?: number | null
          subtitle?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_instructor_id_fkey"
            columns: ["instructor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          audio_url: string | null
          content: string | null
          course_id: string | null
          created_at: string
          duration_minutes: number | null
          id: string
          is_completed: boolean | null
          order_index: number
          title: string
          video_url: string | null
        }
        Insert: {
          audio_url?: string | null
          content?: string | null
          course_id?: string | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          is_completed?: boolean | null
          order_index: number
          title: string
          video_url?: string | null
        }
        Update: {
          audio_url?: string | null
          content?: string | null
          course_id?: string | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          is_completed?: boolean | null
          order_index?: number
          title?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          full_name: string | null
          id: string
          language_level: string | null
          learning_goals: string[] | null
          streak_count: number | null
          subscription_tier: string | null
          total_hours_learned: number | null
          total_lessons_completed: number | null
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          language_level?: string | null
          learning_goals?: string[] | null
          streak_count?: number | null
          subscription_tier?: string | null
          total_hours_learned?: number | null
          total_lessons_completed?: number | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          language_level?: string | null
          learning_goals?: string[] | null
          streak_count?: number | null
          subscription_tier?: string | null
          total_hours_learned?: number | null
          total_lessons_completed?: number | null
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      progress: {
        Row: {
          completed_at: string | null
          course_id: string | null
          created_at: string
          id: string
          lesson_id: string | null
          score: number | null
          time_spent_minutes: number | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          course_id?: string | null
          created_at?: string
          id?: string
          lesson_id?: string | null
          score?: number | null
          time_spent_minutes?: number | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          course_id?: string | null
          created_at?: string
          id?: string
          lesson_id?: string | null
          score?: number | null
          time_spent_minutes?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "progress_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          created_at: string
          end_date: string | null
          id: string
          start_date: string
          status: string | null
          stripe_subscription_id: string | null
          tier: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: string
          start_date?: string
          status?: string | null
          stripe_subscription_id?: string | null
          tier: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: string
          start_date?: string
          status?: string | null
          stripe_subscription_id?: string | null
          tier?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tutors: {
        Row: {
          availability: string[] | null
          bio: string | null
          certifications: string[] | null
          created_at: string
          display_name: string | null
          education: string | null
          experience_years: number | null
          hourly_rate: number
          id: string
          is_active: boolean | null
          is_verified: boolean | null
          languages: string[]
          profile_id: string | null
          public_avatar_url: string | null
          rating: number | null
          specialization: string
          total_sessions: number | null
        }
        Insert: {
          availability?: string[] | null
          bio?: string | null
          certifications?: string[] | null
          created_at?: string
          display_name?: string | null
          education?: string | null
          experience_years?: number | null
          hourly_rate: number
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          languages: string[]
          profile_id?: string | null
          public_avatar_url?: string | null
          rating?: number | null
          specialization: string
          total_sessions?: number | null
        }
        Update: {
          availability?: string[] | null
          bio?: string | null
          certifications?: string[] | null
          created_at?: string
          display_name?: string | null
          education?: string | null
          experience_years?: number | null
          hourly_rate?: number
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          languages?: string[]
          profile_id?: string | null
          public_avatar_url?: string | null
          rating?: number | null
          specialization?: string
          total_sessions?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tutors_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      tutor_profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          experience_years: number | null
          full_name: string | null
          hourly_rate: number | null
          id: string | null
          is_active: boolean | null
          is_verified: boolean | null
          languages: string[] | null
          rating: number | null
          specialization: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          experience_years?: number | null
          full_name?: never
          hourly_rate?: number | null
          id?: string | null
          is_active?: boolean | null
          is_verified?: boolean | null
          languages?: string[] | null
          rating?: number | null
          specialization?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          experience_years?: number | null
          full_name?: never
          hourly_rate?: number | null
          id?: string | null
          is_active?: boolean | null
          is_verified?: boolean | null
          languages?: string[] | null
          rating?: number | null
          specialization?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
