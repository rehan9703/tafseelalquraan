import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, Navigation, AlertCircle, Smartphone } from 'lucide-react';
// @ts-ignore

// Makkah coordinates
const MAKKAH_LAT = 21.4225;
const MAKKAH_LNG = 39.8262;

export function QiblaFinder() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null);
  const [deviceHeading, setDeviceHeading] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [needsCompassPermission, setNeedsCompassPermission] = useState(false);
  const compassRef = useRef<HTMLDivElement>(null);

  // Calculate Qibla direction
  const calculateQibla = (lat: number, lng: number) => {
    const lat1 = (lat * Math.PI) / 180;
    const lat2 = (MAKKAH_LAT * Math.PI) / 180;
    const lngDiff = ((MAKKAH_LNG - lng) * Math.PI) / 180;

    const y = Math.sin(lngDiff);
    const x = Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(lngDiff);

    let qibla = (Math.atan2(y, x) * 180) / Math.PI;
    qibla = (qibla + 360) % 360;

    return qibla;
  };

  // Get user location
  const getLocation = () => {
    setLoading(true);
    setError('');

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        const qibla = calculateQibla(latitude, longitude);
        setQiblaDirection(qibla);
        setLoading(false);
      },
      (_err) => {
        setError('Unable to retrieve your location. Please enable location services.');
        setLoading(false);
      }
    );
  };

  // Listen for device orientation
  useEffect(() => {
    // Check if permission is needed (iOS 13+)
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      setNeedsCompassPermission(true);
    } else {
      startCompass();
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('deviceorientationabsolute', handleOrientation);
    };
  }, []);

  const handleOrientation = (event: DeviceOrientationEvent) => {
    let heading = event.alpha || 0;

    // iOS compass
    // @ts-ignore - webkitCompassHeading is iOS-specific
    if (event.webkitCompassHeading) {
      // @ts-ignore - webkitCompassHeading is iOS-specific
      heading = event.webkitCompassHeading;
    }

    setDeviceHeading(heading);
  };

  const startCompass = () => {
    if (window.DeviceOrientationEvent) {
      // Try absolute first
      if ('ondeviceorientationabsolute' in window) {
        // @ts-ignore - TS Window type doesn't contain this property
        window.addEventListener('deviceorientationabsolute', handleOrientation as any);
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    }
  };

  const requestCompassPermission = async () => {
    try {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        if (permission === 'granted') {
          setNeedsCompassPermission(false);
          startCompass();
        } else {
          setError('Compass permission was denied. The Qibla feature needs it to point correctly.');
        }
      }
    } catch (err) {
      setError('Failed to request compass permission.');
    }
  };

  // Calculate relative Qibla direction
  const relativeQibla = qiblaDirection !== null
    ? (qiblaDirection - deviceHeading + 360) % 360
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">
          Qibla Finder
        </h1>
        <p className="text-islamic-text-muted mt-1">
          Find the direction of the Kaaba from your location
        </p>
      </div>

      {/* Compass */}
      <div className="islamic-card p-8">
        <div className="relative w-64 h-64 mx-auto">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-islamic-border" />

          {/* Degree Markings */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <div
              key={deg}
              className="absolute top-0 left-1/2 -translate-x-1/2 origin-bottom"
              style={{
                height: '50%',
                transform: `rotate(${deg}deg)`,
              }}
            >
              <div className="w-0.5 h-3 bg-islamic-text-muted" />
            </div>
          ))}

          {/* Cardinal Directions */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm font-bold text-islamic-gold">N</div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-bold text-islamic-text-muted">S</div>
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-sm font-bold text-islamic-text-muted">W</div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold text-islamic-text-muted">E</div>

          {/* Rotating Compass */}
          <div
            ref={compassRef}
            className="absolute inset-4 rounded-full bg-islamic-bg-secondary flex items-center justify-center transition-transform duration-100"
            style={{ transform: `rotate(${-deviceHeading}deg)` }}
          >
            {/* Qibla Indicator */}
            {relativeQibla !== null && (
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2"
                style={{ transform: `rotate(${relativeQibla}deg)`, transformOrigin: 'center 128px' }}
              >
                <div className="flex flex-col items-center">
                  <Navigation className="w-8 h-8 text-islamic-gold fill-current" />
                  <span className="text-xs text-islamic-gold font-medium">Qibla</span>
                </div>
              </div>
            )}

            {/* Center */}
            <div className="w-4 h-4 rounded-full bg-islamic-gold" />
          </div>
        </div>

        {/* Direction Info */}
        {qiblaDirection !== null && (
          <div className="text-center mt-6">
            <p className="text-4xl font-bold text-islamic-gold">
              {Math.round(qiblaDirection)}°
            </p>
            <p className="text-islamic-text-muted">Qibla Direction</p>
          </div>
        )}
      </div>

      {/* Location Info */}
      {location && (
        <div className="islamic-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-islamic-gold" />
            <h3 className="font-semibold text-islamic-text-primary">Your Location</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-islamic-bg-secondary rounded-lg">
              <p className="text-sm text-islamic-text-muted">Latitude</p>
              <p className="font-mono text-islamic-text-primary">{location.lat.toFixed(4)}°</p>
            </div>
            <div className="p-3 bg-islamic-bg-secondary rounded-lg">
              <p className="text-sm text-islamic-text-muted">Longitude</p>
              <p className="font-mono text-islamic-text-primary">{location.lng.toFixed(4)}°</p>
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="p-4 bg-islamic-crimson/10 rounded-xl border border-islamic-crimson/20 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-islamic-crimson" />
          <p className="text-islamic-crimson">{error}</p>
        </div>
      )}

      {/* Get Location Button */}
      <div className="flex flex-col gap-3">
        <button
          onClick={getLocation}
          disabled={loading}
          className="w-full btn-gold flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-islamic-bg-primary border-t-transparent rounded-full animate-spin" />
          ) : (
            <Compass className="w-5 h-5" />
          )}
          {location ? 'Update Location' : 'Find My Location'}
        </button>

        {needsCompassPermission && (
          <button
            onClick={requestCompassPermission}
            className="w-full btn flex items-center justify-center gap-2 bg-islamic-bg-secondary border border-islamic-border text-islamic-text-primary"
          >
            <Smartphone className="w-5 h-5" />
            Enable Compass (iOS)
          </button>
        )}
      </div>

      {/* Instructions */}
      <div className="islamic-card p-6">
        <h3 className="font-semibold text-islamic-text-primary mb-3">How to Use</h3>
        <ol className="space-y-2 text-sm text-islamic-text-secondary list-decimal list-inside">
          <li>Click "Find My Location" to get your current position</li>
          <li>Hold your device flat and rotate until the Qibla arrow points forward</li>
          <li>The arrow shows the direction to the Kaaba in Makkah</li>
          <li>For best results, calibrate your compass by moving your device in a figure-8 pattern</li>
        </ol>
      </div>
    </motion.div>
  );
}
