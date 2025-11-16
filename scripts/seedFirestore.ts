/**
 * Seed script for Firestore mock data
 * Run with: npx ts-node scripts/seedFirestore.ts
 * 
 * Note: Make sure to set up Firebase credentials in .env.local first
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { mockUser, mockEvents, mockStories, mockRewards, mockEmergency } from '../lib/mockData';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

async function seedFirestore() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    console.log('Starting Firestore seeding...');

    // Seed users
    console.log('Seeding users...');
    await setDoc(doc(db, 'users', mockUser.id), {
      ...mockUser,
      date: new Date(),
    });

    // Seed events
    console.log('Seeding events...');
    for (const event of mockEvents) {
      await setDoc(doc(db, 'events', event.id), {
        ...event,
        date: event.date,
      });
    }

    // Seed stories
    console.log('Seeding stories...');
    for (const story of mockStories) {
      await setDoc(doc(db, 'stories', story.id), {
        ...story,
        timestamp: story.timestamp,
      });
    }

    // Seed rewards
    console.log('Seeding rewards...');
    for (const reward of mockRewards) {
      await setDoc(doc(db, 'rewards', reward.id), reward);
    }

    // Seed emergency
    console.log('Seeding emergencies...');
    await setDoc(doc(db, 'emergencies', mockEmergency.id), mockEmergency);

    console.log('✅ Firestore seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding Firestore:', error);
    process.exit(1);
  }
}

seedFirestore();

