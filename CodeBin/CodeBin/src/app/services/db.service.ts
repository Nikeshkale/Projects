import { Injectable } from '@angular/core';
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Snippet } from '../../models/snippets';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private db?: any;
  constructor(private authService: AuthService, private router:Router) {
    this.db = getFirestore();
  }

  async createSnippet(snippet: Snippet) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippets'), {
        ...snippet,
        by: this.authService.getUid(),
      });
      console.log('Document written with ID: ', docRef.id);
      this.router.navigate(['/'])

    } catch (e) {
      console.error('Error adding document: ', e);
      alert('something went wrong while creating...');
    }
  }

  async getAllSnippet() {
    let result: any[] = [];
    // let result: { id: number, title: string, code: string }[] = [];
    try {
      const querySnapshot = await getDocs(collection(this.db, 'snippets'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        result.push({ id: doc.id, ...doc.data() });
      });
      return result;
    } catch (e) {
      console.error('Error getting all document: ', e);
      alert('something went wrong while getting all snipptes...');
      return [];
    }
  }

  async getSnippetById(docId: string) {
    try {
      const docRef = doc(this.db, 'snippets', docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = { id: docSnap.id, ...docSnap.data() };
        console.log('Document data:', data);
        return data;
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
        return null;
      }
    } catch (e) {
      console.error('Error getting document: ', e);
      alert('something went wrong while getting snipptes...');
      return null;
    }
  }
}
