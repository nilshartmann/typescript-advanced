import { z } from "zod";

export default undefined;

// simulate fetch function, skip promise for simplicity
function fetch(): any {}

type User = {
  login: string;
  email?: string;
  sessionTimeout: number;
};

// back to fetch...
//
//  I want two things:
//    - a type for fetchUser
//    - be sure, the type matches AT RUNTIME the fetch result

const ZUser = z.object({
  login: z.string().min(5).max(10),
  email: z.string().optional(),
  sessionTimeout: z.number(),
});

type IUser = z.infer<typeof ZUser>;

function fetchUser(): User {
  const potentialUser = fetch();

  const user = ZUser.parse(potentialUser);

  return user;
  // how can we make sure, we actually have a user?
  // "in" checks as seen before?
}

const u2: User = fetchUser();
const u: IUser = fetchUser(); // IUser matches User! (note: in real live, you only would use the IUser)

// ZOD: https://github.com/colinhacks/zod
