import AppRoutes from "./AppRoutes"
import HeaderLayout from "./components/HeaderLayout"
import { CartProvider } from "./contexts/CartContext"

function App() {
  return (
    <div className="app-layout">
      <CartProvider>
      <HeaderLayout />
      <div className="container">
        <AppRoutes />
      </div>
    </CartProvider>
    </div>

  )
}

export default App
