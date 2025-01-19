import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://rest-items.research.cloudonix.io/';
  private authToken: string | null = null;

  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('authToken');
  }

  setAuthKey(token: string) {
    this.authToken = token;
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return this.authToken;
  }

  clearToken(): void {
    this.authToken = null;
    localStorage.removeItem('authToken');
  }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`,
      }),
    };
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/items`, this.getHeaders());
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/items/${id}`, this.getHeaders());
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/items`, product, this.getHeaders());
  }

  updateProduct(id: number, updates: any): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/items/${id}`, updates, this.getHeaders());
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/items/${id}`, this.getHeaders());
  }
}
