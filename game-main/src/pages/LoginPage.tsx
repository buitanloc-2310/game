import React from 'react';
import {
  ArrowLeft,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRoundPlus,
} from 'lucide-react';

import { api, authToken } from '../lib/api';
import { navigate } from '../lib/router';
import type { Account } from '../types';

type AuthMode = 'login' | 'register' | 'bootstrap';

export function LoginPage({
  onAuth,
}: {
  onAuth: (account: Account) => void;
}) {
  const [mode, setMode] = React.useState<AuthMode>('login');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayName, setDisplayName] = React.useState('');
  const [setupKey, setSetupKey] = React.useState('');

  const [message, setMessage] = React.useState('');
  const [busy, setBusy] = React.useState(false);

  const [initialized, setInitialized] = React.useState(true);
  const [checkingStatus, setCheckingStatus] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;

    api
      .authStatus()
      .then((response) => {
        if (!mounted) return;

        setInitialized(response.initialized);

        if (!response.initialized) {
          setMode('bootstrap');
        } else {
          setMode('login');
        }
      })
      .catch(() => {
        if (!mounted) return;

        setInitialized(true);
        setMode('login');
      })
      .finally(() => {
        if (mounted) {
          setCheckingStatus(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const resetMessage = () => {
    setMessage('');
  };

  const switchMode = (nextMode: AuthMode) => {
    resetMessage();
    setMode(nextMode);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (busy) return;

    setBusy(true);
    setMessage('');

    try {
      let response;

      if (mode === 'login') {
        response = await api.login(email.trim(), password);
      } else if (mode === 'register') {
        response = await api.register(
          email.trim(),
          password,
          displayName.trim(),
        );
      } else {
        response = await api.bootstrap(
          setupKey,
          email.trim(),
          password,
          displayName.trim(),
        );
      }

      authToken.set(response.token);
      onAuth(response.account);

      navigate(response.account.isAdmin ? '/admin' : '/creator');
    } catch (error: any) {
      setMessage(
        error?.message ||
          'Không thể xử lý yêu cầu lúc này. Vui lòng thử lại.',
      );
    } finally {
      setBusy(false);
    }
  };

  const heading =
    mode === 'login'
      ? 'Đăng nhập'
      : mode === 'register'
        ? 'Khởi tạo tài khoản Creator'
        : 'Khởi tạo Admin đầu tiên';

  const eyebrow =
    mode === 'bootstrap'
      ? 'FIRST SYSTEM SETUP'
      : mode === 'register'
        ? 'SELF INITIALIZATION'
        : 'SECURE ACCESS';

  const description =
    mode === 'login'
      ? 'Creator và Admin sử dụng chung một hệ tài khoản. Người học và TNV không cần đăng nhập để tham gia game.'
      : mode === 'register'
        ? 'Khởi tạo tài khoản Creator để tạo nội dung, game và Access Pass. Quyền Admin không được tự cấp.'
        : 'Chỉ sử dụng bước này khi hệ thống chưa có bất kỳ tài khoản nào trong D1.';

  const submitLabel =
    mode === 'login'
      ? 'Đăng nhập'
      : mode === 'register'
        ? 'Khởi tạo tài khoản'
        : 'Khởi tạo Admin';

  if (checkingStatus) {
    return (
      <main className="auth-page auth-v2">
        <div className="auth-backdrop">
          <span />
          <span />
          <span />
        </div>

        <button className="auth-back" onClick={() => navigate('/')}>
          <ArrowLeft />
          Trang chủ
        </button>

        <section className="auth-card auth-card-v2">
          <div className="auth-brand">
            <img
              src="/brand/sky-first-logo.png"
              alt="Sky First"
            />

            <div>
              <strong>Sky First Games</strong>
              <small>Creator & Admin</small>
            </div>
          </div>

          <span className="eyebrow">CHECKING SYSTEM</span>

          <h1>Đang kiểm tra hệ thống…</h1>

          <p>
            Sky First Games đang kiểm tra trạng thái tài khoản và cấu hình
            hệ thống.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="auth-page auth-v2">
      <div className="auth-backdrop">
        <span />
        <span />
        <span />
      </div>

      <button
        className="auth-back"
        onClick={() => navigate('/')}
      >
        <ArrowLeft />
        Trang chủ
      </button>

      <section className="auth-card auth-card-v2">
        <div className="auth-brand">
          <img
            src="/brand/sky-first-logo.png"
            alt="Sky First"
          />

          <div>
            <strong>Sky First Games</strong>
            <small>Creator & Admin</small>
          </div>
        </div>

        <span className="eyebrow">{eyebrow}</span>

        <h1>{heading}</h1>

        <p>{description}</p>

        <form onSubmit={submit}>
          {mode !== 'login' && (
            <label>
              <span>Tên hiển thị</span>

              <div className="input-icon">
                <UserRoundPlus />

                <input
                  required
                  value={displayName}
                  onChange={(event) =>
                    setDisplayName(event.target.value)
                  }
                  placeholder="Tên hiển thị"
                  autoComplete="name"
                />
              </div>
            </label>
          )}

          <label>
            <span>Email</span>

            <div className="input-icon">
              <Mail />

              <input
                type="email"
                required
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </label>

          <label>
            <span>Mật khẩu</span>

            <div className="input-icon">
              <LockKeyhole />

              <input
                type="password"
                minLength={8}
                required
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Tối thiểu 8 ký tự"
                autoComplete={
                  mode === 'login'
                    ? 'current-password'
                    : 'new-password'
                }
              />
            </div>
          </label>

          {mode === 'bootstrap' && (
            <label>
              <span>ADMIN_SETUP_KEY</span>

              <div className="input-icon">
                <ShieldCheck />

                <input
                  type="password"
                  required
                  value={setupKey}
                  onChange={(event) =>
                    setSetupKey(event.target.value)
                  }
                  placeholder="Setup key trong Worker secret"
                  autoComplete="off"
                />
              </div>
            </label>
          )}

          {message && (
            <div className="error-box">
              {message}
            </div>
          )}

          <button
            className="primary-button full big"
            disabled={busy}
          >
            {busy ? 'Đang xử lý…' : submitLabel}
          </button>
        </form>

        {initialized && mode !== 'bootstrap' && (
          <div className="auth-switch">
            {mode === 'login' ? (
              <>
                <span>Lần đầu sử dụng Sky First Games?</span>

                <button
                  type="button"
                  onClick={() => switchMode('register')}
                >
                  Khởi tạo tài khoản Creator
                </button>
              </>
            ) : (
              <>
                <span>Đã có tài khoản Creator hoặc Admin?</span>

                <button
                  type="button"
                  onClick={() => switchMode('login')}
                >
                  Đăng nhập
                </button>
              </>
            )}
          </div>
        )}

        <div className="auth-note">
          <Sparkles />

          <span>
            Người học và TNV không cần tài khoản để tham gia game bằng link,
            mã tham gia hoặc Access Pass.
          </span>
        </div>
      </section>
    </main>
  );
}
