import { films } from './Film/mockedData';
import { people } from './Person/mockedData';

// Persons and Films have circular references, so they are created here.
people[0].films = [films[3], films[4]];
people[1].films = [films[4], films[5]];
people[2].films = [films[3], films[4], films[5]];
people[3].films = [
  films[0],
  films[1],
  films[2],
  films[3],
  films[4],
  films[5],
  films[6],
];

films[0].characters = [people[3]];
films[1].characters = [people[3]];
films[2].characters = [people[3]];
films[3].characters = [people[0], people[2], people[3]];
films[4].characters = [people[0], people[1], people[2], people[3]];
films[5].characters = [people[1], people[2], people[3]];
films[6].characters = [people[3]];

// Export the merged mocked data.
export { films, people };
