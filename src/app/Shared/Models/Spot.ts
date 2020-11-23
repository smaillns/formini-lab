export interface Spot {
    id: number;
    name: string;
    images: string[];
    evaluation?: number;
    distance?: number;
    province?: string;
    country: string;
}