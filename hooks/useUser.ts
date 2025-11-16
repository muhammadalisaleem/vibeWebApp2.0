'use client';

import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { User } from '@/lib/types';

// Mock user data - replace with actual Firestore query later
const mockUser: User = {
  id: 'user1',
  name: 'Alex Rivera',
  email: 'alex@example.com',
  coins: 2450,
  streak: 7,
  badges: ['🏆', '🎯', '💖', '🌟', '🔥', '⭐', '✨', '🎖️'],
  hours: 47,
  eventsJoined: 12,
  civicChampion: true,
};

export function useUser(userId: string = 'user1') {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      // TODO: Replace with actual Firestore query
      // const userDoc = await getDoc(doc(db, 'users', userId));
      // return userDoc.data() as User;
      return mockUser;
    },
    enabled: !!userId,
  });
}

