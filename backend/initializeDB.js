const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro na conexão com o MongoDB:"));
db.once("open", async () => {
  console.log("Conectado ao MongoDB");

  // Defina seu modelo de usuário do MongoDB
  const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
    telefone: String,
  });

  try {
    // Verifique se já existem usuários no banco de dados
    const existingUsers = await User.find();
    if (existingUsers.length === 0) {
      // Se não houver usuários, insira alguns dados iniciais

      const hashedPassword = await bcrypt.hash("senha123", 10);

      await User.create({
        name: "Usuário de Exemplo",
        email: "usuario@example.com",
        password: hashedPassword,
        telefone: "123456789",
      });

      console.log("Dados iniciais inseridos com sucesso.");
    } else {
      console.log(
        "Já existem usuários no banco de dados. Nenhum dado inicial inserido."
      );
    }
  } catch (error) {
    console.error("Erro ao inicializar o banco de dados:", error);
  } finally {
    // Encerre a conexão com o MongoDB após a conclusão
    mongoose.connection.close();
  }
});
