import { films } from './Film/mockedData';
import { people } from './Person/mockedData';

// Persons and Films have circular references, so they are created here.
people[0].films = [films[0], films[1]];
people[1].films = [films[1], films[2]];
people[2].films = [films[0], films[1], films[2]];

films[0].characters = [people[0], people[2]];
films[1].characters = [people[0], people[1], people[2]];
films[2].characters = [people[1], people[2]];

// Export the merged mocked data.
export { films, people };
