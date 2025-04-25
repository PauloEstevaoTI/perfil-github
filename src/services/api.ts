import axios, { AxiosError } from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL, })

export const getUser = async (nameUser: string) => {
    try {
      const response = await api.get(`/users/${nameUser}`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.error("Erro na resposta:", error.response.data);
          throw new Error(
            `Erro ${error.response.status}: ${error.response.data.message || "Erro desconhecido"}`
          );
        } else if (error.request) {
          console.error("Nenhuma resposta do servidor:", error.request);
          throw new Error("Servidor não respondeu. Verifique sua conexão.");
        } else {
          console.error("Erro ao configurar a requisição:", error.message);
          throw new Error("Erro ao buscar usuário. Tente novamente.");
        }
      } else {
        console.error("Erro desconhecido:", error);
        throw new Error("Ocorreu um erro inesperado.");
      }
    }
  };
