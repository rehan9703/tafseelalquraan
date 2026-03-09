import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Info, TrendingUp, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

// Nisab values (approximate, based on gold/silver prices)
const NISAB_GOLD_GRAMS = 85;
const NISAB_SILVER_GRAMS = 595;
const GOLD_PRICE_PER_GRAM = 60; // Approximate USD
const SILVER_PRICE_PER_GRAM = 0.8; // Approximate USD
const ZAKAT_RATE = 0.025; // 2.5%

interface AssetCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  placeholder: string;
}

const assetCategories: AssetCategory[] = [
  { id: 'cash', name: 'Cash & Bank Balance', icon: DollarSign, placeholder: 'Enter cash amount' },
  { id: 'gold', name: 'Gold (value)', icon: TrendingUp, placeholder: 'Enter gold value' },
  { id: 'silver', name: 'Silver (value)', icon: TrendingUp, placeholder: 'Enter silver value' },
  { id: 'investments', name: 'Investments & Stocks', icon: TrendingUp, placeholder: 'Enter investment value' },
  { id: 'business', name: 'Business Assets', icon: TrendingUp, placeholder: 'Enter business asset value' },
  { id: 'receivables', name: 'Money Owed to You', icon: DollarSign, placeholder: 'Enter receivable amount' },
];

const deductionCategories: AssetCategory[] = [
  { id: 'debts', name: 'Debts & Loans', icon: Minus, placeholder: 'Enter debt amount' },
  { id: 'expenses', name: 'Immediate Expenses', icon: Minus, placeholder: 'Enter expense amount' },
];

export function ZakatCalculator() {
  const [assets, setAssets] = useState<Record<string, number>>({});
  const [deductions, setDeductions] = useState<Record<string, number>>({});

  const handleAssetChange = (id: string, value: string) => {
    setAssets(prev => ({ ...prev, [id]: parseFloat(value) || 0 }));
  };

  const handleDeductionChange = (id: string, value: string) => {
    setDeductions(prev => ({ ...prev, [id]: parseFloat(value) || 0 }));
  };

  const totalAssets = useMemo(() => 
    Object.values(assets).reduce((sum, val) => sum + val, 0),
  [assets]);

  const totalDeductions = useMemo(() => 
    Object.values(deductions).reduce((sum, val) => sum + val, 0),
  [deductions]);

  const zakatableAmount = Math.max(0, totalAssets - totalDeductions);
  
  const nisabValue = Math.min(
    NISAB_GOLD_GRAMS * GOLD_PRICE_PER_GRAM,
    NISAB_SILVER_GRAMS * SILVER_PRICE_PER_GRAM
  );

  const isEligibleForZakat = zakatableAmount >= nisabValue;
  const zakatAmount = isEligibleForZakat ? zakatableAmount * ZAKAT_RATE : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">
          Zakat Calculator
        </h1>
        <p className="text-islamic-text-muted mt-1">
          Calculate your annual Zakat obligation
        </p>
      </div>

      {/* Nisab Info */}
      <div className="islamic-card p-6">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-islamic-gold flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-islamic-text-primary mb-2">About Nisab</h3>
            <p className="text-sm text-islamic-text-secondary">
              Nisab is the minimum amount of wealth required to be eligible for Zakat. 
              It is equivalent to the value of 85 grams of gold or 595 grams of silver. 
              You only pay Zakat if your wealth exceeds the Nisab threshold.
            </p>
            <p className="text-sm text-islamic-gold mt-2">
              Current Nisab: ${nisabValue.toLocaleString()} USD (approximate)
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assets */}
        <div className="islamic-card p-6">
          <h3 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-islamic-emerald" />
            Assets & Wealth
          </h3>
          <div className="space-y-4">
            {assetCategories.map((category) => (
              <div key={category.id}>
                <label className="block text-sm text-islamic-text-muted mb-1">
                  {category.name}
                </label>
                <div className="relative">
                  <category.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
                  <input
                    type="number"
                    min="0"
                    placeholder={category.placeholder}
                    onChange={(e) => handleAssetChange(category.id, e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-islamic-bg-secondary border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-islamic-emerald/10 rounded-xl">
            <p className="text-sm text-islamic-text-muted">Total Assets</p>
            <p className="text-2xl font-bold text-islamic-emerald">
              ${totalAssets.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Deductions */}
        <div className="islamic-card p-6">
          <h3 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
            <Minus className="w-5 h-5 text-islamic-crimson" />
            Deductions
          </h3>
          <div className="space-y-4">
            {deductionCategories.map((category) => (
              <div key={category.id}>
                <label className="block text-sm text-islamic-text-muted mb-1">
                  {category.name}
                </label>
                <div className="relative">
                  <category.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
                  <input
                    type="number"
                    min="0"
                    placeholder={category.placeholder}
                    onChange={(e) => handleDeductionChange(category.id, e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-islamic-bg-secondary border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-islamic-crimson/10 rounded-xl">
            <p className="text-sm text-islamic-text-muted">Total Deductions</p>
            <p className="text-2xl font-bold text-islamic-crimson">
              ${totalDeductions.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="islamic-card p-6">
        <h3 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-islamic-gold" />
          Zakat Calculation
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-islamic-bg-secondary rounded-xl">
            <p className="text-sm text-islamic-text-muted">Total Wealth</p>
            <p className="text-xl font-bold text-islamic-text-primary">
              ${zakatableAmount.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-islamic-bg-secondary rounded-xl">
            <p className="text-sm text-islamic-text-muted">Nisab Threshold</p>
            <p className="text-xl font-bold text-islamic-text-primary">
              ${nisabValue.toLocaleString()}
            </p>
          </div>
          <div className={cn(
            "p-4 rounded-xl",
            isEligibleForZakat ? "bg-islamic-gold/20" : "bg-islamic-bg-secondary"
          )}>
            <p className="text-sm text-islamic-text-muted">Zakat Payable (2.5%)</p>
            <p className={cn(
              "text-xl font-bold",
              isEligibleForZakat ? "text-islamic-gold" : "text-islamic-text-muted"
            )}>
              ${zakatAmount.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Eligibility Message */}
        <div className={cn(
          "p-4 rounded-xl text-center",
          isEligibleForZakat 
            ? "bg-islamic-emerald/10 border border-islamic-emerald/20" 
            : "bg-islamic-bg-secondary"
        )}>
          {isEligibleForZakat ? (
            <div>
              <p className="text-islamic-emerald font-semibold mb-1">
                You are eligible to pay Zakat
              </p>
              <p className="text-sm text-islamic-text-secondary">
                Your wealth exceeds the Nisab threshold. Please pay ${zakatAmount.toLocaleString()} as Zakat.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-islamic-text-muted font-semibold mb-1">
                Zakat is not obligatory
              </p>
              <p className="text-sm text-islamic-text-secondary">
                Your wealth is below the Nisab threshold. Continue to grow your wealth and remember Allah's blessings.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Zakat Rules */}
      <div className="islamic-card p-6">
        <h3 className="font-semibold text-islamic-text-primary mb-3">Important Rules</h3>
        <ul className="space-y-2 text-sm text-islamic-text-secondary">
          <li>• Zakat is due after one lunar year (Hawl) of possessing the Nisab</li>
          <li>• Zakat is calculated on gold, silver, cash, and trade goods</li>
          <li>• Personal items (home, car, furniture) are not subject to Zakat</li>
          <li>• Debts that are due immediately can be deducted</li>
          <li>• Zakat should be given to the 8 categories mentioned in Quran (Surah At-Tawbah 9:60)</li>
        </ul>
      </div>
    </motion.div>
  );
}
