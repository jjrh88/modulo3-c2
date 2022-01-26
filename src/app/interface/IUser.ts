export interface IUser {
    _id?: string
    user?: string,
    password: string
}

//definir una serie de métodos
/*
public interface IUser{
   void crear(User user)
   List<User> listar() 
}
Usar o implementar dicha interfaz
public class controllerUser implements IUser{
   void crear(User user){
     DAO.save(user); //realiza el registro
   }
   List<User> listar(){
     DAO.listar() => User.find({})
   } 
}
*/