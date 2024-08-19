import User from "./userModel";

export async function addUser(data: {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
}) {
  try {
    const newUser = await User.create(data);
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Error adding user.");
  }
}

export async function findUserbyEmail(email: string) {
  try {
    const user2 = await User.findOne({
      where: {
        email: email,
      },
    });

    return user2;
  } catch (error) {
    throw new Error("Error login");
  }
}

export async function findAuthenticatedUser(id: number) {
    try {
      const user2 = await User.findOne({
        where: {
          id: id,
        },
      });
  
      return user2;
    } catch (error) {
      throw new Error("Error");
    }
  }