export interface People {
  id: number;
  name: string;
  height: string | number;
  mass: string | number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  hobbies?: string[];
}
