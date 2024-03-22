import { FormEvent, useState } from 'react';
import './index.scss';
import QRCode from 'react-qr-code';
const QrCode = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const qrValue = target.urlForGenerate.value;
    setUrl(qrValue);
  };

  return (
    <div className="container-qrCode-view">
      <div className="qrCode-title_container">
        <h1 className="qrCode-title_h1">Génération de Qr Code</h1>
        <span className="qrCode-title_span">
          Cette partie n'a pas de rapport avec mon portfolio mais permet d'aider des connaissances qui avaient besoins
          de générer des QrCode simplement
        </span>
      </div>
      <form id="form" className="qrCode-form_container" onSubmit={handleSubmit}>
        <label className="qrCode-form_label">
          Entrer l'url du site :
          <input type="url" name="urlForGenerate" className="qrCode-form_input" placeholder="https://..." />
        </label>
        <button type="submit" className="qrCode-submit_btn">
          Valider
        </button>
      </form>
      {url !== '' && (
        <div className="qr-code_container">
          <h2 className="qr-conde_info">QR CODE pour {url}</h2>
          <div style={{ background: 'white', padding: '16px' }} className="qr-code_margin">
            <QRCode size={256} style={{ width: '100%', height: '100%' }} value={url} />
          </div>
        </div>
      )}
    </div>
  );
};

export default QrCode;
