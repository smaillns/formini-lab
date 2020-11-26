import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractEntity } from '../Models/abstract-entity';

export abstract class AbstractService<E extends AbstractEntity<ID>, ID> {

  protected constructor(protected http: HttpClient) { }

  public abstract get url(): string;

  public getAll(): Observable<E[]> {
    return this.http.get<E[]>(this.url).pipe(
      map((response: E[]) => {
        if (response) {
          return response;
        } else {
          throw new Error();
        }
      })
    );
  }


  public getById(id: ID): Observable<E> {
    const urlGetById = `${this.url}/${id}`;
    return this.http.get<E>(urlGetById).pipe(
      map((response: E) => {
        if (response) {
          return response;
        } else {
          throw new Error();
        }
      })
    );
  }

  public add(entity: E): Observable<E> {
    console.log(this.url, entity);
    return this.http.post<E>(this.url, entity);

  }

  public update(entity: E): Observable<E> {
    return this.http.put<E>(this.url, entity);
  }

  public delete(id: ID): Observable<E> {
    const urlDeleteById = this.url.concat('/').concat(id.toString());
    return this.http.delete<E>(urlDeleteById);
  }

}
