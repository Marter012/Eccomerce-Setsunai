// Centraliza la URL del backend. En desarrollo puede configurarse con VITE_API_URL.
export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "https://decent-aurora-setsunai-cc7a0add.koyeb.app"
).replace(/\/+$/, "");

export const apiUrl = (path) =>
  `${API_BASE_URL}/${String(path).replace(/^\/+/, "")}`;
