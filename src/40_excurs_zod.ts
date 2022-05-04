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

function fetchUser(): User {
  const potentialUser = fetch();

  // how can we make sure, we actually have a user?
  return potentialUser;
}

const u: User = fetchUser();
