import type { Model } from 'sequelize';
import { SECTION_SEPARATOR } from '../constants';
import type { UserDto } from '../dto';
import { SectionRepository } from '../repositories';

export class SectionService {
  async get() {
    const unicSectionsStrs = SectionRepository.get();

    const getSectionsSet = (json: Model[]) => {
      const allSectionsValue = (json as UserDto[]).reduce(
        (prev, { Секция_конференции_: section }): string =>
          [prev, section].join(SECTION_SEPARATOR),
        ''
      );

      const sectionSet = [
        ...new Set(allSectionsValue.split(SECTION_SEPARATOR)),
      ];
      sectionSet.shift();

      return sectionSet;
    };

    return getSectionsSet(await unicSectionsStrs);
  }
}
