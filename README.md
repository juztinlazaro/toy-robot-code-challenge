# Toy Robot Code Challenge

# Description and requirements:
The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no
other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented
from falling to destruction. Any movement that would result in the robot falling from the table must be prevented,
however further valid movement commands must still be allowed.

# Libraries, framework and setups.
1. Create in [create-react-app](https://create-react-app.dev/).
2. CSS processor [sass](https://sass-lang.com/).
 - css guide [rscss](https://ricostacruz.com/rscss/).
3. Unit testing
  - Jest
  - enzyme
  - sinon
4. typescript
5. UI framework for fast ui design. [antd](https://ant.design/docs/react/introduce).
6. Used yarn to install packages.

# Running Application.
1. `yarn install`
2. `yarn start` or `npm run start`
3.  Optional if you want to add boxes go change `MAXIMUM_ROW_BOXES` path `src/common/constant/app.constant.ts`