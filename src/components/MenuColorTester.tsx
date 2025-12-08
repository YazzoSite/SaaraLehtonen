import React, { useState } from 'react';

/**
 * Color picker tool for testing hamburger menu colors
 * Shows all palette colors with codes and allows live testing
 */

// All colors from the 3 palettes
const paletteColors = {
  'Driftwood Pearl Morning': [
    { name: 'Driftwood', hex: '#CCCDC7' },
    { name: 'Dusty Rose', hex: '#BC7B6F' },
    { name: 'Dark Brown', hex: '#5A322A' },
    { name: 'Peachy Pink', hex: '#E4A499' },
    { name: 'Dusty Blue-Gray', hex: '#718A9E' }
  ],
  'Graphite': [
    { name: 'Light Pink', hex: '#ECC5C6' },
    { name: 'Light Gray', hex: '#C1C0C2' },
    { name: 'Peachy Beige', hex: '#F5E9E7' },
    { name: 'Olive/Taupe', hex: '#837D68' },
    { name: 'Dusty Blue', hex: '#8A9DB1' }
  ],
  'Sapphire Ash Morning': [
    { name: 'Deep Blue', hex: '#35627A' },
    { name: 'Peachy Pink', hex: '#E5AEA9' },
    { name: 'Dusty Rose', hex: '#B46258' },
    { name: 'Lavender Blue', hex: '#A6A9D0' },
    { name: 'Off-White', hex: '#F5F5F5' },
    { name: 'Gray-Green', hex: '#8E9A98' }
  ]
};

export const MenuColorTester: React.FC = () => {
  const [bgColor, setBgColor] = useState('#BC7B6F'); // Current color
  const [textColor, setTextColor] = useState('#FFFFFF'); // White by default
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleTextColor = () => {
    setTextColor(textColor === '#FFFFFF' ? '#000000' : '#FFFFFF');
  };

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ marginBottom: '1rem', color: '#333' }}>
        Hamburger Menu Color Tester
      </h1>

      {/* Current Selection Display */}
      <div style={{
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#333' }}>Current Selection</h2>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <strong>Background:</strong>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '0.5rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: bgColor,
                border: '2px solid #ccc',
                borderRadius: '4px'
              }} />
              <code style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                backgroundColor: '#f5f5f5',
                padding: '0.5rem 1rem',
                borderRadius: '4px'
              }}>
                {bgColor}
              </code>
            </div>
          </div>

          <div>
            <strong>Text Color:</strong>
            <div style={{ marginTop: '0.5rem' }}>
              <button
                onClick={toggleTextColor}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  backgroundColor: textColor,
                  color: textColor === '#FFFFFF' ? '#000' : '#FFF',
                  border: '2px solid #333',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}
              >
                {textColor === '#FFFFFF' ? 'White (#FFFFFF)' : 'Black (#000000)'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div style={{
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#333' }}>Live Preview</h2>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          This is how your mobile menu will look:
        </p>

        {/* Mock mobile menu */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div
            style={{
              backgroundColor: bgColor,
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(0,0,0,0.1)',
              overflow: 'hidden',
              minWidth: '180px'
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: '0.5rem 0' }}>
              {['Etusivu', 'Saara', 'Galleria', 'Media', 'CV', 'Yhteystiedot'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      display: 'block',
                      color: textColor,
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 500,
                      padding: '0.875rem 1.5rem',
                      transition: 'all 0.2s ease',
                      borderLeft: '3px solid transparent'
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Color Palette Selector */}
      {Object.entries(paletteColors).map(([paletteName, colors]) => (
        <div
          key={paletteName}
          style={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h2 style={{ margin: '0 0 1rem 0', color: '#333' }}>{paletteName}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {colors.map((color) => (
              <button
                key={color.hex}
                onClick={() => setBgColor(color.hex)}
                style={{
                  padding: '1rem',
                  cursor: 'pointer',
                  backgroundColor: color.hex,
                  border: bgColor === color.hex ? '3px solid #000' : '2px solid #ccc',
                  borderRadius: '8px',
                  textAlign: 'left',
                  transition: 'transform 0.2s ease',
                  boxShadow: bgColor === color.hex ? '0 4px 12px rgba(0,0,0,0.2)' : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px'
                }}>
                  {color.name}
                </div>
                <code style={{
                  color: '#000',
                  fontSize: '0.9rem',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  display: 'inline-block'
                }}>
                  {color.hex}
                </code>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Instructions */}
      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '1.5rem',
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#1976d2' }}>How to use:</h3>
        <ol style={{ margin: 0, paddingLeft: '1.5rem', color: '#333' }}>
          <li>Click any color square to test it as the menu background</li>
          <li>Click the text color button to toggle between white and black text</li>
          <li>The "Live Preview" shows exactly how your menu will look</li>
          <li>Once you find the perfect combination, note the hex codes</li>
          <li>Let me know which colors you want, and I'll update the code!</li>
        </ol>
      </div>
    </div>
  );
};
