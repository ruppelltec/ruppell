export type Course = {
  id: string;
  title: string;
  popularity: number;
  creator: string;
};

export type Category = {
  title: string;
  description: string;
  courses: Course[];
};

export type Expert = {
  name: string;
  profession: string;
  image: string;
};

export type Nest = {
  id: string;
  title: string;
  description: string;
};
