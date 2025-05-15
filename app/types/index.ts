export interface NavClicksProps {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}
export interface Product {
  id: string | number;
  name: any; 
  describ: string;
  price: string;
  category?: string;
 
}
