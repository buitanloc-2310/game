# Sky First Games — Admin Console Ultra Upgrade

Bản nâng cấp này giữ nguyên kiến trúc và chức năng cũ, tập trung nâng `/admin` thành trung tâm điều khiển toàn hệ thống.

## Nâng cấp chính

- Command Center với health/status, D1/R2/game/content/account/session/result metrics.
- Website Studio, Homepage Builder, Navigation, Footer, Branding & Theme, SEO.
- Language Core, Game Mode Manager, Game Lab, Content Control, Content Matrix.
- Collections, Challenges & Daily, Creator Accounts, Access Passes.
- Live Sessions có terminate, Results & Analytics.
- R2 Media Library có list/upload/delete.
- Moderation, Announcements, Feature Flags, Audit Log, Backup/Export, System Control.
- Audit log tự ghi khi sửa settings, game mode, account, content, session, media/access pass và export.
- Admin API mở rộng nhưng không thay đổi API cũ.

## API admin mới

- `GET /api/admin/overview`
- `GET /api/admin/question-sets`
- `PUT /api/admin/question-sets/:id`
- `GET /api/admin/access-passes`
- `DELETE /api/admin/access-passes/:id`
- `GET /api/admin/results`
- `GET /api/admin/media`
- `DELETE /api/admin/media?key=...`
- `GET /api/admin/audit`
- `GET /api/admin/export`
- `PUT /api/admin/sessions/:id`

Không cần migration mới cho các tính năng trên vì bảng `audit_logs` và các bảng nền tảng đã có trong schema hiện tại.
