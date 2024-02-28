import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { invoke } from '@tauri-apps/api'

function App() {
  invoke('greet', { name: 'World' })
  // `invoke` returns a Promise
  .then((response) => console.log(response))
  
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
