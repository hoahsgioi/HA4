import React, { useState } from 'react'
import { Button, Input } from '../components/UI'
import './InfoPage.css'

const InfoPage = () => {
  const [activeTab, setActiveTab] = useState('account')
  const [formData, setFormData] = useState({
    fullName: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
    birthday: '1990-01-15',
    gender: 'male',
    address: 'Hà Nội, Việt Nam',
    bio: 'Yêu thích nghệ thuật AI và sáng tạo nội dung',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    newsletter: true
  })
  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showEmail: false,
    showPhone: false,
    allowMessages: true
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handlePrivacyChange = (key) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSaveProfile = () => {
    console.log('Save profile:', formData)
    // TODO: API call
  }

  const handleChangePassword = () => {
    console.log('Change password')
    // TODO: API call
  }

  const tabs = [
    { id: 'account', label: '🔐 Tài khoản', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'security', label: '🔒 Bảo mật', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { id: 'notifications', label: '🔔 Thông báo', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
    { id: 'privacy', label: '🛡️ Quyền riêng tư', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
  ]

  return (
    <div className="info-page">
      <div className="info-container">
        {/* Header */}
        <div className="info-header">
          <div className="header-content">
            <div className="header-icon">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h1 className="header-title">Cài đặt tài khoản</h1>
              <p className="header-subtitle">Quản lý thông tin và tùy chọn của bạn</p>
            </div>
          </div>
        </div>

        <div className="info-content">
          {/* Tabs */}
          <div className="info-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              >
                <svg className="tab-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                </svg>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Account Tab */}
            {activeTab === 'account' && (
              <div className="content-section">
                <h2 className="section-title">Thông tin cá nhân</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Họ và tên</label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email của bạn"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Số điện thoại</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Ngày sinh</label>
                    <Input
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Giới tính</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Địa chỉ</label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Địa chỉ của bạn"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Giới thiệu bản thân</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      className="form-textarea"
                      rows="4"
                      placeholder="Viết vài dòng về bạn..."
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <Button variant="primary" onClick={handleSaveProfile}>
                    💾 Lưu thay đổi
                  </Button>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="content-section">
                <h2 className="section-title">Đổi mật khẩu</h2>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label className="form-label">Mật khẩu hiện tại</label>
                    <Input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      placeholder="Nhập mật khẩu hiện tại"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mật khẩu mới</label>
                    <Input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      placeholder="Nhập mật khẩu mới"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Xác nhận mật khẩu mới</label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Nhập lại mật khẩu mới"
                    />
                  </div>
                </div>
                <div className="info-box">
                  <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Mật khẩu mạnh nên:</strong>
                    <ul>
                      <li>Có ít nhất 8 ký tự</li>
                      <li>Bao gồm chữ hoa, chữ thường và số</li>
                      <li>Có ký tự đặc biệt (@, #, $, ...)</li>
                    </ul>
                  </div>
                </div>
                <div className="form-actions">
                  <Button variant="primary" onClick={handleChangePassword}>
                    🔒 Đổi mật khẩu
                  </Button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="content-section">
                <h2 className="section-title">Cài đặt thông báo</h2>
                <div className="settings-list">
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-label">📧 Email thông báo</div>
                      <div className="setting-description">Nhận thông báo qua email</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={notifications.email}
                        onChange={() => handleNotificationChange('email')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-label">🔔 Thông báo đẩy</div>
                      <div className="setting-description">Nhận thông báo trên thiết bị</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={notifications.push}
                        onChange={() => handleNotificationChange('push')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-label">📱 SMS thông báo</div>
                      <div className="setting-description">Nhận thông báo qua tin nhắn</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={notifications.sms}
                        onChange={() => handleNotificationChange('sms')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-label">📰 Bản tin</div>
                      <div className="setting-description">Nhận bản tin và ưu đãi</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={notifications.newsletter}
                        onChange={() => handleNotificationChange('newsletter')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Tab */}
            {activeTab === 'privacy' && (
              <div className="content-section">
                <h2 className="section-title">Quyền riêng tư</h2>
                <div className="settings-list">
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-label">👁️ Hồ sơ công khai</div>
                      <div className="setting-description">Cho phép mọi người xem hồ sơ</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={privacy.profilePublic}
                        onChange={() => handlePrivacyChange('profilePublic')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-label">📧 Hiển thị email</div>
                      <div className="setting-description">Cho phép hiển thị email công khai</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={privacy.showEmail}
                        onChange={() => handlePrivacyChange('showEmail')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-label">📱 Hiển thị số điện thoại</div>
                      <div className="setting-description">Cho phép hiển thị SĐT công khai</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={privacy.showPhone}
                        onChange={() => handlePrivacyChange('showPhone')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-label">💬 Cho phép nhắn tin</div>
                      <div className="setting-description">Người khác có thể gửi tin nhắn</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={privacy.allowMessages}
                        onChange={() => handlePrivacyChange('allowMessages')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
