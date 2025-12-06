import { setSeederFactory } from 'typeorm-extension';

import { randomUUID } from 'crypto';
import { CompanyEntity } from '../../entity/company/companies.entity';

export default setSeederFactory(CompanyEntity, (faker) => {
  const company = new CompanyEntity();
  company.id = randomUUID();
  company.name = '株式会社' + faker.person.fullName();

  return company;
});
