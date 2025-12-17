import server from "./server.js";

// Default to port 4401 so that automated tests can reach the backend.
// Allow overriding via the PORT environment variable if needed.
const PORT = process.env.PORT ? Number(process.env.PORT) : 4401;

server.listen(PORT, function () {
  console.log(
    `Capstone Project Backend is running on http://localhost:${PORT}`
  );
});

