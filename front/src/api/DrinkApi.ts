import { Drink } from '@/types/bar';

const API_PATH = '/api/drinks?page=1&size=2';

export async function getDrinks(): Promise<Drink[]> {
    const response = await fetch(API_PATH);
    return await response.json();
}
