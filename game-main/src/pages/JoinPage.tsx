import React from 'react';
import { Camera, ImageUp, KeyRound, Link2, QrCode, ScanLine, UserRound, X } from 'lucide-react';
import { navigate } from '../lib/router';
import type { SiteConfig } from '../types';

type JoinMethod='code'|'scan'|'image';

function extractCode(raw:string){
  try{const u=new URL(raw);return u.searchParams.get('code')||u.pathname.match(/(?:join|room)\/([A-Za-z0-9_-]+)/)?.[1]||raw.replace(/\D/g,'').slice(0,8)}catch{return raw.replace(/\D/g,'').slice(0,8)}
}

export function JoinPage({config}:{config?:SiteConfig}){
  const settings={code:true,cameraQr:true,uploadQr:true,directLink:true,requireName:true,...(config?.joinSettings||{})};
  const preset=new URLSearchParams(location.search).get('code')||'';
  const [method,setMethod]=React.useState<JoinMethod>('code'); const [code,setCode]=React.useState(preset); const [name,setName]=React.useState('');
  const [scanMsg,setScanMsg]=React.useState(''); const [stream,setStream]=React.useState<MediaStream|null>(null); const videoRef=React.useRef<HTMLVideoElement>(null);
  const stopCamera=()=>{stream?.getTracks().forEach(t=>t.stop());setStream(null)};
  React.useEffect(()=>()=>stopCamera(),[stream]);
  const startCamera=async()=>{
    setMethod('scan');setScanMsg('');
    try{
      const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});setStream(s);if(videoRef.current){videoRef.current.srcObject=s;await videoRef.current.play()}
      const Detector=(window as any).BarcodeDetector;
      if(!Detector){setScanMsg('This device does not support in-browser QR scanning. Use “Upload QR Image” instead.');return}
      const detector=new Detector({formats:['qr_code']});
      const loop=async()=>{if(!videoRef.current||!s.active)return;try{const found=await detector.detect(videoRef.current);if(found?.[0]?.rawValue){setCode(extractCode(found[0].rawValue));setScanMsg('QR code detected.');stopCamera();setMethod('code');return}}catch{}requestAnimationFrame(loop)};requestAnimationFrame(loop);
    }catch{setScanMsg('Unable to open the camera. Grant camera permission or use “Upload QR Image”.')}
  };
  const scanImage=async(file:File|null)=>{
    if(!file)return;setMethod('image');setScanMsg('Reading QR…');
    const Detector=(window as any).BarcodeDetector;
    if(!Detector){setScanMsg('This browser cannot read QR codes from images. Open the direct link or enter the code manually.');return}
    try{const bmp=await createImageBitmap(file);const detector=new Detector({formats:['qr_code']});const found=await detector.detect(bmp);if(found?.[0]?.rawValue){setCode(extractCode(found[0].rawValue));setScanMsg('QR code read from image.');setMethod('code')}else setScanMsg('No QR code was found in the image.')}catch{setScanMsg('Unable to read this QR image.')}
  };
  return <main className="page-shell narrow join-shell"><div className="page-hero compact"><span className="eyebrow">JOIN GAME</span><h1>Enter a code or scan a QR code to join</h1><p>Learners do not need accounts. Use the code, QR or direct link provided by a volunteer or Creator.</p></div><div className="panel join-panel advanced-join"><div className="join-tabs"><button className={method==='code'?'active':''} onClick={()=>{stopCamera();setMethod('code')}}><KeyRound/>Enter Code</button>{settings.cameraQr&&<button className={method==='scan'?'active':''} onClick={startCamera}><ScanLine/>Scan QR</button>}{settings.uploadQr&&<label className={method==='image'?'active':''}><ImageUp/>Upload QR Image<input type="file" accept="image/*" onChange={e=>scanImage(e.target.files?.[0]||null)}/></label>}</div>{method==='scan'&&<div className="scanner-box"><video ref={videoRef} playsInline muted/><div className="scan-frame"><QrCode/></div><button className="scanner-close" onClick={()=>{stopCamera();setMethod('code')}}><X/></button></div>}{scanMsg&&<div className="join-scan-msg"><Camera/>{scanMsg}</div>}<label><span><KeyRound/>Game code</span><input inputMode="numeric" maxLength={8} placeholder="482 731" value={code} onChange={e=>setCode(e.target.value.replace(/\D/g,''))}/></label><label><span><UserRound/>Display name</span><input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}/></label><button className="primary-button big full" disabled={!code||(settings.requireName&&!name)} onClick={()=>navigate(`/room?code=${encodeURIComponent(code)}&name=${encodeURIComponent(name)}`)}>Join</button><div className="join-help"><Link2 size={16}/>If you have a direct link, simply open it — you do not need to enter the code again.</div></div></main>
}
