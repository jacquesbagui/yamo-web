import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  QrCode,
  ShoppingCart,
  Wallet,
  Check,
  Clock,
  Star,
  Plus,
  Minus,
  ArrowLeft,
  Bell
} from "lucide-react";

const primaryOrange = "#F0AB3C";
const accentOrange = "#EB622B";
const darkBlue = "#121827";

// Interfaces pour les types de données
interface Restaurant {
  id: string;
  name: string;
  address: string;
  logo: string;
  currency: string;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  preparationTime: number;
}

interface PaymentProvider {
  id: string;
  name: string;
  icon: string;
  ussd: string;
  fee: number;
}

interface OrderStatus {
  status: string;
  label: string;
  icon: string;
  color: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

// Simulation des données du backend
const mockRestaurant: Restaurant = {
  id: "rest_123",
  name: "Chez Mama Adjoa",
  address: "Cocody, Abidjan",
  logo: "🍽️",
  currency: "XOF"
};

const mockMenuItems: MenuItem[] = [
  {
    id: "item_1",
    name: "Attiéké Poisson",
    description: "Attiéké avec poisson grillé et sauce claire",
    price: 2500,
    image: "🐟",
    category: "Plats principaux",
    preparationTime: 15
  },
  {
    id: "item_2",
    name: "Alloco Complet",
    description: "Bananes plantains avec œuf et sauce pimentée",
    price: 1800,
    image: "🍌",
    category: "Plats principaux",
    preparationTime: 10
  },
  {
    id: "item_3",
    name: "Jus de Gingembre",
    description: "Fraîchement préparé",
    price: 500,
    image: "🥤",
    category: "Boissons",
    preparationTime: 5
  },
  {
    id: "item_4",
    name: "Bissap Glacé",
    description: "Boisson d'hibiscus sucrée",
    price: 400,
    image: "🧊",
    category: "Boissons",
    preparationTime: 2
  }
];

const mockPaymentProviders: PaymentProvider[] = [
  { id: "orange", name: "Orange Money", icon: "🧡", ussd: "*144#", fee: 0 },
  { id: "mtn", name: "MTN MoMo", icon: "💛", ussd: "*133#", fee: 25 },
  { id: "wave", name: "Wave", icon: "💙", ussd: "*777#", fee: 0 },
  { id: "moov", name: "Moov Money", icon: "💚", ussd: "*555#", fee: 15 }
];

const orderStatuses: OrderStatus[] = [
  { status: "pending", label: "Commande reçue", icon: "📋", color: "#F59E0B" },
  { status: "confirmed", label: "Confirmée", icon: "✅", color: "#10B981" },
  { status: "preparing", label: "En préparation", icon: "👨‍🍳", color: "#8B5CF6" },
  { status: "ready", label: "Prête", icon: "🔔", color: "#EF4444" },
  { status: "completed", label: "Servie", icon: "🎉", color: "#059669" }
];

// Props pour chaque composant
interface QRScanStepProps {
  onNext: () => void;
}

interface MenuStepProps {
  items: MenuItem[];
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  removeFromCart: (itemId: string) => void;
  onNext: () => void;
  onBack: () => void;
}

interface CartStepProps {
  cart: CartItem[];
  total: number;
  preparationTime: number;
  onNext: () => void;
  onBack: () => void;
}

interface PaymentStepProps {
  providers: PaymentProvider[];
  total: number;
  onPayment: (provider: PaymentProvider) => void;
  isProcessing: boolean;
  selectedProvider: PaymentProvider | null;
  onBack: () => void;
}

interface TrackingStepProps {
  orderStatus: number;
  statuses: OrderStatus[];
  cart: CartItem[];
  total: number;
  paymentProvider: PaymentProvider | null;
  onReset: () => void;
}

// Composants pour chaque étape
function QRScanStep({ onNext }: QRScanStepProps) {
  return (
    <motion.div
      key="qr-scan"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="text-center h-full flex flex-col justify-center"
    >
      <div className="mb-8">
        <div
          className="w-32 h-32 mx-auto rounded-2xl mb-6 flex items-center justify-center border-4 border-dashed"
          style={{ borderColor: primaryOrange }}
        >
          <QrCode className="h-20 w-20" style={{ color: primaryOrange }} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Scanner le QR Code</h3>
        <p className="text-gray-600 text-sm">Pointez votre téléphone vers le code QR de la table</p>
      </div>
      <Button
        onClick={onNext}
        className="w-full text-white rounded-xl py-3"
        style={{ backgroundColor: primaryOrange }}
      >
        Simuler le scan
        <QrCode className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  );
}

function MenuStep({ items, cart, addToCart, updateQuantity, removeFromCart, onNext, onBack }: MenuStepProps) {
  const categories = [...new Set(items.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const filteredItems = items.filter(item => item.category === selectedCategory);
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.div
      key="menu"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      {/* Header avec resto info */}
      <div className="text-center mb-4">
        <div
          className="w-12 h-12 mx-auto rounded-xl mb-2 flex items-center justify-center text-white text-xl"
          style={{ backgroundColor: primaryOrange }}
        >
          {mockRestaurant.logo}
        </div>
        <h3 className="font-bold text-gray-900">{mockRestaurant.name}</h3>
        <p className="text-xs text-gray-600">{mockRestaurant.address}</p>
      </div>
      {/* Categories */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            style={{
              backgroundColor: selectedCategory === category ? primaryOrange : undefined
            }}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {filteredItems.map(item => {
          const cartItem = cart.find(c => c.id === item.id);
          const quantity = cartItem?.quantity || 0;

          return (
            <div key={item.id} className="bg-gray-50 p-3 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.image}</span>
                    <div>
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-bold" style={{ color: primaryOrange }}>
                          {item.price.toLocaleString()} F
                        </span>
                        <span className="text-xs text-gray-500">
                          <Clock className="inline h-3 w-3 mr-1" />
                          {item.preparationTime}min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {quantity === 0 ? (
                <Button
                  onClick={() => addToCart(item)}
                  size="sm"
                  className="w-full text-white rounded-lg"
                  style={{ backgroundColor: accentOrange }}
                >
                  Ajouter
                  <Plus className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => updateQuantity(item.id, quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-bold">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, quantity + 1)}
                    className="w-8 h-8 rounded-full text-white flex items-center justify-center"
                    style={{ backgroundColor: primaryOrange }}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Bottom Actions */}
      <div className="flex gap-2">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour
        </Button>
        <Button
          onClick={onNext}
          disabled={cartItemsCount === 0}
          className="flex-1 text-white"
          style={{ backgroundColor: cartItemsCount > 0 ? primaryOrange : '#9CA3AF' }}
        >
          Panier ({cartItemsCount})
          <ShoppingCart className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function CartStep({ cart, total, preparationTime, onNext, onBack }: CartStepProps) {
  return (
    <motion.div
      key="cart"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Mon Panier</h3>
        <div className="text-sm text-gray-600">
          <Clock className="inline h-4 w-4 mr-1" />
          ~{preparationTime}min
        </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
            <div className="flex items-center gap-3">
              <span className="text-lg">{item.image}</span>
              <div>
                <h4 className="font-medium text-sm">{item.name}</h4>
                <p className="text-xs text-gray-600">
                  {item.price.toLocaleString()} F × {item.quantity}
                </p>
              </div>
            </div>
            <span className="font-bold" style={{ color: primaryOrange }}>
              {(item.price * item.quantity).toLocaleString()} F
            </span>
          </div>
        ))}
      </div>
      {/* Total */}
      <div className="bg-gray-50 p-4 rounded-xl mb-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-xl" style={{ color: primaryOrange }}>
            {total.toLocaleString()} F
          </span>
        </div>
      </div>
      {/* Actions */}
      <div className="flex gap-2">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Modifier
        </Button>
        <Button
          onClick={onNext}
          className="flex-1 text-white"
          style={{ backgroundColor: primaryOrange }}
        >
          Payer
          <Wallet className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function PaymentStep({ providers, total, onPayment, isProcessing, selectedProvider, onBack }: PaymentStepProps) {
  return (
    <motion.div
      key="payment"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      <h3 className="text-xl font-bold mb-6 text-center">Choisir le paiement</h3>

      <div className="mb-6 text-center">
        <div className="text-2xl font-bold" style={{ color: primaryOrange }}>
          {total.toLocaleString()} FCFA
        </div>
      </div>
      {isProcessing ? (
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="animate-spin w-12 h-12 border-4 border-gray-200 rounded-full mb-4"
               style={{ borderTopColor: primaryOrange }}></div>
          <p className="text-center text-gray-600">
            Traitement du paiement avec {selectedProvider?.name}...
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Code USSD: {selectedProvider?.ussd}
          </p>
        </div>
      ) : (
        <>
          <div className="flex-1 space-y-3 mb-4">
            {providers.map(provider => (
              <button
                key={provider.id}
                onClick={() => onPayment(provider)}
                className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-300 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{provider.icon}</span>
                  <div className="text-left">
                    <div className="font-medium">{provider.name}</div>
                    <div className="text-xs text-gray-600">
                      Frais: {provider.fee === 0 ? 'Gratuit' : `${provider.fee} F`}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  {provider.ussd}
                </div>
              </button>
            ))}
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="w-full"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour au panier
          </Button>
        </>
      )}
    </motion.div>
  );
}

function TrackingStep({ orderStatus, statuses, cart, total, paymentProvider, onReset }: TrackingStepProps) {
  const currentStatus = statuses[orderStatus];

  return (
    <motion.div
      key="tracking"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      <div className="text-center mb-6">
        <div
          className="w-16 h-16 mx-auto rounded-full text-white text-2xl flex items-center justify-center mb-4"
          style={{ backgroundColor: currentStatus.color }}
        >
          {currentStatus.icon}
        </div>
        <h3 className="text-xl font-bold">{currentStatus.label}</h3>
        <p className="text-sm text-gray-600">Commande #{Date.now().toString().slice(-6)}</p>
      </div>
      {/* Timeline */}
      <div className="flex-1 mb-6">
        <div className="space-y-4">
          {statuses.map((status, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  index <= orderStatus ? 'text-white' : 'bg-gray-200 text-gray-400'
                }`}
                style={{
                  backgroundColor: index <= orderStatus ? status.color : undefined
                }}
              >
                {index <= orderStatus ? '✓' : index + 1}
              </div>
              <div className={`flex-1 ${index <= orderStatus ? 'text-gray-900' : 'text-gray-400'}`}>
                <div className="font-medium text-sm">{status.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Order Summary */}
      <div className="bg-gray-50 p-4 rounded-xl mb-4">
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span>Articles:</span>
            <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total:</span>
            <span className="font-bold">{total.toLocaleString()} F</span>
          </div>
          <div className="flex justify-between">
            <span>Paiement:</span>
            <span>{paymentProvider?.name}</span>
          </div>
        </div>
      </div>
      {orderStatus === statuses.length - 1 && (
        <div className="space-y-3">
          <Button
            className="w-full text-white"
            style={{ backgroundColor: primaryOrange }}
          >
            <Star className="h-4 w-4 mr-1" />
            Noter l'expérience
          </Button>
          <Button
            onClick={onReset}
            variant="outline"
            className="w-full"
          >
            Nouvelle commande
          </Button>
        </div>
      )}
    </motion.div>
  );
}

export default function OrderPayDemoComponent() {
  const [currentStep, setCurrentStep] = useState<'qr-scan' | 'menu' | 'cart' | 'payment' | 'tracking'>('qr-scan');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<PaymentProvider | null>(null);
  const [orderStatus, setOrderStatus] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Simulation de progression automatique du statut
  useEffect(() => {
    if (currentStep === 'tracking' && orderStatus < orderStatuses.length - 1) {
      const timer = setTimeout(() => {
        setOrderStatus(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, orderStatus]);

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalAmount = (): number => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalPreparationTime = (): number => {
    return Math.max(...cart.map(item => item.preparationTime));
  };

  const handlePayment = async (provider: PaymentProvider) => {
    setSelectedPayment(provider);
    setIsProcessing(true);

    // Simulation API call backend
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep('tracking');
    }, 2000);
  };

  const resetDemo = () => {
    setCurrentStep('qr-scan');
    setCart([]);
    setSelectedPayment(null);
    setOrderStatus(0);
    setIsProcessing(false);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 'qr-scan':
        return (
          <QRScanStep onNext={() => setCurrentStep('menu')} />
        );
      case 'menu':
        return (
          <MenuStep
            items={mockMenuItems}
            cart={cart}
            addToCart={addToCart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            onNext={() => setCurrentStep('cart')}
            onBack={() => setCurrentStep('qr-scan')}
          />
        );
      case 'cart':
        return (
          <CartStep
            cart={cart}
            total={getTotalAmount()}
            preparationTime={getTotalPreparationTime()}
            onNext={() => setCurrentStep('payment')}
            onBack={() => setCurrentStep('menu')}
          />
        );
      case 'payment':
        return (
          <PaymentStep
            providers={mockPaymentProviders}
            total={getTotalAmount()}
            onPayment={handlePayment}
            isProcessing={isProcessing}
            selectedProvider={selectedPayment}
            onBack={() => setCurrentStep('cart')}
          />
        );
      case 'tracking':
        return (
          <TrackingStep
            orderStatus={orderStatus}
            statuses={orderStatuses}
            cart={cart}
            total={getTotalAmount()}
            paymentProvider={selectedPayment}
            onReset={resetDemo}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-3xl">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Démo Interactive</h3>
          <p className="text-gray-600">Testez l'expérience client complète</p>
        </div>
        {/* Mobile Frame */}
        <div className="relative mx-auto w-80 min-h-[600px] bg-white rounded-3xl shadow-2xl border-8 border-gray-200 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-xl"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>

          <div className="pt-8 px-6 pb-6 h-full">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>
        </div>
        {/* Reset Button */}
        <div className="text-center mt-6">
          <Button
            onClick={resetDemo}
            variant="outline"
            className="text-orange-600 border-orange-200 hover:bg-orange-50"
          >
            Recommencer la démo
          </Button>
        </div>
      </div>
    </div>
  );
}
