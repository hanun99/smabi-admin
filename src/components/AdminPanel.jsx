import React, { useState } from 'react';
import { Users, FileText, MessageSquare, GraduationCap, Home, Settings, Bell, Search, Menu, X, Plus, Edit, Trash2, Eye, Star, Upload, Calendar, User, LogOut, ChevronDown, Save, BarChart3, TrendingUp, Activity } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Mock user data
  const user = {
    name: 'Admin SMAIT',
    email: 'admin@smaitbaitul.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  };

  const logout = () => {
    console.log('Logging out...');
  };

  // Sample data for Alumni
  const [alumniData, setAlumniData] = useState([
    { id: 1, nama: 'Siti Aisyah Rahman', jurusan: 'Kedokteran', jalur: 'SNMPTN', universitas: 'Universitas Indonesia' },
    { id: 2, nama: 'Fatimah Azzahra', jurusan: 'Teknik Informatika', jalur: 'SBMPTN', universitas: 'Institut Teknologi Bandung' },
    { id: 3, nama: 'Khadijah Nurhaliza', jurusan: 'Psikologi', jalur: 'Mandiri', universitas: 'Universitas Gadjah Mada' },
    { id: 4, nama: 'Maryam Salsabila', jurusan: 'Farmasi', jalur: 'SNMPTN', universitas: 'Universitas Airlangga' },
    { id: 5, nama: 'Aminah Zahra', jurusan: 'Hukum', jalur: 'SBMPTN', universitas: 'Universitas Brawijaya' },
  ]);

  // Sample data for Berita
  const [beritaData, setBeritaData] = useState([
    { 
      id: 1, 
      judul: 'Prestasi Gemilang Siswa SMAIT Baitul Ilmi di Olimpiade Matematika', 
      teks: 'Siswa SMAIT Baitul Ilmi meraih juara 1 pada kompetisi olimpiade matematika tingkat nasional...', 
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop',
      createdBy: 'Admin Humas', 
      createdAt: '2024-07-05' 
    },
    { 
      id: 2, 
      judul: 'Kegiatan Pembelajaran Outdoor di Alam Terbuka', 
      teks: 'Program pembelajaran outdoor bertujuan untuk meningkatkan kreativitas dan kecintaan terhadap alam...', 
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop',
      createdBy: 'Admin Kurikulum', 
      createdAt: '2024-07-03' 
    },
    { 
      id: 3, 
      judul: 'Wisuda Virtual Angkatan ke-5 SMAIT Baitul Ilmi', 
      teks: 'Acara wisuda diselenggarakan dengan protokol kesehatan yang ketat namun tetap meriah...', 
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=250&fit=crop',
      createdBy: 'Admin Sekolah', 
      createdAt: '2024-06-30' 
    },
  ]);

  // Sample data for Testimoni
  const [testimoniData, setTestimoniData] = useState([
    { 
      id: 1, 
      star: 5, 
      profile: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face',
      name: 'Dr. Aminah Sari, M.Pd', 
      posisi: 'Dosen Universitas Indonesia', 
      testimoni: 'SMAIT Baitul Ilmi telah memberikan pendidikan karakter yang luar biasa. Lulusannya memiliki akhlak mulia dan prestasi akademik yang gemilang.' 
    },
    { 
      id: 2, 
      star: 5, 
      profile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      name: 'Prof. Ahmad Fauzi, Ph.D', 
      posisi: 'Rektor Universitas Brawijaya', 
      testimoni: 'Siswa dari SMAIT Baitul Ilmi selalu menunjukkan dedikasi tinggi dan kemampuan analitis yang baik dalam perkuliahan.' 
    },
    { 
      id: 3, 
      star: 4, 
      profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      name: 'Drs. Muhammad Ridwan', 
      posisi: 'Kepala Sekolah SMAN 1 Jakarta', 
      testimoni: 'Kerjasama dengan SMAIT Baitul Ilmi dalam program pertukaran guru sangat bermanfaat untuk peningkatan kualitas pendidikan.' 
    },
  ]);

  // Sample data for Sebaran Universitas
  const [sebaranUnivData, setSebaranUnivData] = useState([
    { id: 1, nama: 'Universitas Indonesia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Universitas_Indonesia_logo.svg/100px-Universitas_Indonesia_logo.svg.png' },
    { id: 2, nama: 'Institut Teknologi Bandung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Institut_Teknologi_Bandung_logo.svg/100px-Institut_Teknologi_Bandung_logo.svg.png' },
    { id: 3, nama: 'Universitas Gadjah Mada', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Universitas_Gadjah_Mada_logo.svg/100px-Universitas_Gadjah_Mada_logo.svg.png' },
    { id: 4, nama: 'Universitas Airlangga', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Universitas_Airlangga_logo.svg/100px-Universitas_Airlangga_logo.svg.png' },
  ]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'alumni', label: 'Alumni', icon: Users },
    { id: 'berita', label: 'Berita', icon: FileText },
    { id: 'testimoni', label: 'Testimoni', icon: MessageSquare },
    { id: 'sebaran-univ', label: 'Sebaran Universitas', icon: GraduationCap },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const StatCard = ({ title, value, icon: Icon, color, trend }) => (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
          {trend && <p className="text-green-500 text-sm mt-1 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            {trend}
          </p>}
        </div>
        <Icon className="w-12 h-12 text-gray-400" />
      </div>
    </div>
  );

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  const FormInput = ({ label, type = "text", value, onChange, required = false, options = null }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      {type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required={required}
        >
          <option value="">Pilih {label}</option>
          {options?.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          required={required}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required={required}
        />
      )}
    </div>
  );

  const AlumniForm = ({ alumni, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      nama: alumni?.nama || '',
      jurusan: alumni?.jurusan || '',
      jalur: alumni?.jalur || '',
      universitas: alumni?.universitas || ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (alumni) {
        // Update existing alumni
        setAlumniData(prev => prev.map(item => 
          item.id === alumni.id ? { ...item, ...formData } : item
        ));
      } else {
        // Add new alumni
        const newAlumni = {
          id: Date.now(),
          ...formData
        };
        setAlumniData(prev => [...prev, newAlumni]);
      }
      onSave(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Nama Siswi"
          value={formData.nama}
          onChange={(e) => setFormData({...formData, nama: e.target.value})}
          required
        />
        <FormInput
          label="Jurusan"
          value={formData.jurusan}
          onChange={(e) => setFormData({...formData, jurusan: e.target.value})}
          required
        />
        <FormInput
          label="Jalur"
          type="select"
          value={formData.jalur}
          onChange={(e) => setFormData({...formData, jalur: e.target.value})}
          options={['SNMPTN', 'SBMPTN', 'Mandiri']}
          required
        />
        <FormInput
          label="Universitas"
          value={formData.universitas}
          onChange={(e) => setFormData({...formData, universitas: e.target.value})}
          required
        />
        <div className="flex space-x-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Batal
          </button>
        </div>
      </form>
    );
  };

  const BeritaForm = ({ berita, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      judul: berita?.judul || '',
      teks: berita?.teks || '',
      image: berita?.image || '',
      createdBy: berita?.createdBy || 'Admin',
      createdAt: berita?.createdAt || new Date().toISOString().split('T')[0]
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (berita) {
        setBeritaData(prev => prev.map(item => 
          item.id === berita.id ? { ...item, ...formData } : item
        ));
      } else {
        const newBerita = {
          id: Date.now(),
          ...formData
        };
        setBeritaData(prev => [...prev, newBerita]);
      }
      onSave(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Judul Berita"
          value={formData.judul}
          onChange={(e) => setFormData({...formData, judul: e.target.value})}
          required
        />
        <FormInput
          label="Teks Berita"
          type="textarea"
          value={formData.teks}
          onChange={(e) => setFormData({...formData, teks: e.target.value})}
          required
        />
        <FormInput
          label="URL Gambar"
          value={formData.image}
          onChange={(e) => setFormData({...formData, image: e.target.value})}
          required
        />
        <FormInput
          label="Dibuat Oleh"
          value={formData.createdBy}
          onChange={(e) => setFormData({...formData, createdBy: e.target.value})}
          required
        />
        <FormInput
          label="Tanggal"
          type="date"
          value={formData.createdAt}
          onChange={(e) => setFormData({...formData, createdAt: e.target.value})}
          required
        />
        <div className="flex space-x-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Batal
          </button>
        </div>
      </form>
    );
  };

  const TestimoniForm = ({ testimoni, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      star: testimoni?.star || 5,
      profile: testimoni?.profile || '',
      name: testimoni?.name || '',
      posisi: testimoni?.posisi || '',
      testimoni: testimoni?.testimoni || ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (testimoni) {
        setTestimoniData(prev => prev.map(item => 
          item.id === testimoni.id ? { ...item, ...formData } : item
        ));
      } else {
        const newTestimoni = {
          id: Date.now(),
          ...formData
        };
        setTestimoniData(prev => [...prev, newTestimoni]);
      }
      onSave(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Rating"
          type="select"
          value={formData.star}
          onChange={(e) => setFormData({...formData, star: parseInt(e.target.value)})}
          options={[1, 2, 3, 4, 5]}
          required
        />
        <FormInput
          label="URL Foto Profil"
          value={formData.profile}
          onChange={(e) => setFormData({...formData, profile: e.target.value})}
          required
        />
        <FormInput
          label="Nama"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <FormInput
          label="Posisi"
          value={formData.posisi}
          onChange={(e) => setFormData({...formData, posisi: e.target.value})}
          required
        />
        <FormInput
          label="Testimoni"
          type="textarea"
          value={formData.testimoni}
          onChange={(e) => setFormData({...formData, testimoni: e.target.value})}
          required
        />
        <div className="flex space-x-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Batal
          </button>
        </div>
      </form>
    );
  };

  const handleAdd = (type) => {
    setModalType(type);
    setSelectedItem(null);
    setShowModal(true);
  };

  const handleEdit = (type, item) => {
    setModalType(type);
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleDelete = (type, item) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      switch (type) {
        case 'alumni':
          setAlumniData(prev => prev.filter(a => a.id !== item.id));
          break;
        case 'berita':
          setBeritaData(prev => prev.filter(b => b.id !== item.id));
          break;
        case 'testimoni':
          setTestimoniData(prev => prev.filter(t => t.id !== item.id));
          break;
        case 'sebaran-univ':
          setSebaranUnivData(prev => prev.filter(u => u.id !== item.id));
          break;
      }
    }
  };

  const DataTable = ({ data, columns, onEdit, onDelete, onView, type }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4 text-left font-semibold">
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 text-gray-700">
                    {col.render ? col.render(item[col.key], item) : item[col.key]}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onView && onView(item)}
                      className="p-2 text-blue-500 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleEdit(type, item)}
                      className="p-2 text-green-500 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(type, item)}
                      className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ProfileSettings = () => {
    const [profileData, setProfileData] = useState({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      bio: 'Administrator SMAIT Baitul Ilmi',
      phone: '+62 812 3456 7890',
      address: 'Jl. Pendidikan No. 123, Jakarta'
    });

    const handleSave = (e) => {
      e.preventDefault();
      console.log('Profile updated:', profileData);
      alert('Profile berhasil diperbarui!');
    };

    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-6 mb-6">
          <img 
            src={profileData.avatar} 
            alt="Profile" 
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">{profileData.name}</h3>
            <p className="text-gray-600">{profileData.email}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Ubah Foto
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Nama Lengkap"
              value={profileData.name}
              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
              required
            />
            <FormInput
              label="Email"
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              required
            />
            <FormInput
              label="Nomor Telepon"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
            />
            <FormInput
              label="Alamat"
              value={profileData.address}
              onChange={(e) => setProfileData({...profileData, address: e.target.value})}
            />
          </div>
          <FormInput
            label="Bio"
            type="textarea"
            value={profileData.bio}
            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Perubahan</span>
          </button>
        </form>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Alumni"
                value={alumniData.length}
                icon={Users}
                color="border-blue-500"
                trend="+5.2%"
              />
              <StatCard
                title="Total Berita"
                value={beritaData.length}
                icon={FileText}
                color="border-green-500"
                trend="+12.3%"
              />
              <StatCard
                title="Total Testimoni"
                value={testimoniData.length}
                icon={MessageSquare}
                color="border-purple-500"
                trend="+8.7%"
              />
              <StatCard
                title="Sebaran Universitas"
                value={sebaranUnivData.length}
                icon={GraduationCap}
                color="border-orange-500"
                trend="+15.4%"
              />
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">SMAIT Baitul 'Ilmi - Admin Dashboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Alumni Terbaru</h4>
                  <div className="space-y-2">
                    {alumniData.slice(0, 3).map((alumni) => (
                      <div key={alumni.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">{alumni.nama}</span>
                          <span className="text-xs text-gray-500 ml-2">({alumni.jurusan})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Berita Terbaru</h4>
                  <div className="space-y-2">
                    {beritaData.slice(0, 3).map((berita) => (
                      <div key={berita.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">{berita.judul.substring(0, 40)}...</span>
                          <span className="text-xs text-gray-500 ml-2">({berita.createdAt})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'alumni':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Informasi Alumni</h3>
              <p className="text-green-700 mb-4">
                Informasi mengenai alumni SMAIT Baitul 'Ilmi di berbagai perguruan tinggi Negeri maupun swasta yang sudah terkonfirmasi :
              </p>
              <p className="text-green-600 text-sm">
                Selain itu, telah tersebar alumni sebanyak 15% dari total angkatan pertama, kedua dan ketiga yang mengajar di satuan pendidikan TK sampai SD.
              </p>
            </div>
            
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Data Alumni</h2>
              <button 
                onClick={() => handleAdd('alumni')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Alumni</span>
              </button>
            </div>
            
            <DataTable
              data={alumniData}
              columns={[
                { key: 'nama', label: 'Nama Siswi' },
                { key: 'jurusan', label: 'Jurusan' },
                { key: 'jalur', label: 'Jalur' },
                { key: 'universitas', label: 'Universitas' },
              ]}
              onEdit={(item) => handleEdit('alumni', item)}
              onDelete={(item) => handleDelete('alumni', item)}
              onView={(item) => console.log('View alumni:', item)}
              type="alumni"
            />
          </div>
        );

      case 'berita':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Manajemen Berita</h2>
              <button 
                onClick={() => handleAdd('berita')}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Berita</span>
              </button>
            </div>
            
            <DataTable
              data={beritaData}
              columns={[
                { key: 'judul', label: 'Judul Berita' },
                { 
                  key: 'teks', 
                  label: 'Teks Berita',
                  render: (text) => (
                    <span className="truncate max-w-xs block">{text.substring(0, 50)}...</span>
                  )
                },
                { 
                  key: 'image', 
                  label: 'Gambar',
                  render: (image) => (
                    <img src={image} alt="Berita" className="w-16 h-10 object-cover rounded-lg" />
                  )
                },
                { key: 'createdBy', label: 'Dibuat Oleh' },
                { key: 'createdAt', label: 'Tanggal' },
              ]}
              onEdit={(item) => handleEdit('berita', item)}
              onDelete={(item) => handleDelete('berita', item)}
              onView={(item) => console.log('View berita:', item)}
              type="berita"
            />
          </div>
        );

      case 'testimoni':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Manajemen Testimoni</h2>
              <button 
                onClick={() => handleAdd('testimoni')}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Testimoni</span>
              </button>
            </div>
            
            <DataTable
              data={testimoniData}
              columns={[
                { 
                  key: 'star', 
                  label: 'Rating',
                  render: (rating) => (
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  )
                },
                { 
                  key: 'profile', 
                  label: 'Profil',
                  render: (profile) => (
                    <img src={profile} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                  )
                },
                { key: 'name', label: 'Nama' },
                { key: 'posisi', label: 'Posisi' },
                { 
                  key: 'testimoni', 
                  label: 'Testimoni',
                  render: (testimoni) => (
                    <span className="truncate max-w-xs block">{testimoni.substring(0, 50)}...</span>
                  )
                },
              ]}
              onEdit={(item) => handleEdit('testimoni', item)}
              onDelete={(item) => handleDelete('testimoni', item)}
              onView={(item) => console.log('View testimoni:', item)}
              type="testimoni"
            />
          </div>
        );

      case 'sebaran-univ':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Sebaran Universitas</h2>
              <button 
                onClick={() => handleAdd('sebaran-univ')}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Universitas</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sebaranUnivData.map((univ) => (
                <div key={univ.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    <img 
                      src={univ.logo} 
                      alt={univ.nama} 
                      className="w-20 h-20 object-contain"
                    />
                    <h3 className="text-center font-semibold text-gray-700">{univ.nama}</h3>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit('sebaran-univ', univ)}
                        className="p-2 text-green-500 hover:bg-green-100 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete('sebaran-univ', univ)}
                        className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Analytics & Reports</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Sebaran Alumni per Jalur</h3>
                <div className="space-y-3">
                  {['SNMPTN', 'SBMPTN', 'Mandiri'].map(jalur => {
                    const count = alumniData.filter(a => a.jalur === jalur).length;
                    const percentage = (count / alumniData.length * 100).toFixed(1);
                    return (
                      <div key={jalur} className="flex items-center justify-between">
                        <span className="text-gray-700">{jalur}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{width: `${percentage}%`}}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{count} ({percentage}%)</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Rating Testimoni</h3>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map(rating => {
                    const count = testimoniData.filter(t => t.star === rating).length;
                    const percentage = testimoniData.length > 0 ? (count / testimoniData.length * 100).toFixed(1) : 0;
                    return (
                      <div key={rating} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-700">{rating}</span>
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full" 
                              style={{width: `${percentage}%`}}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{count} ({percentage}%)</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Universitas</h3>
              <div className="space-y-3">
                {Array.from(new Set(alumniData.map(a => a.universitas))).map(univ => {
                  const count = alumniData.filter(a => a.universitas === univ).length;
                  return (
                    <div key={univ} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{univ}</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {count} alumni
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Profile Settings</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <User className="w-4 h-4" />
                <span>Manage your account</span>
              </div>
            </div>
            <ProfileSettings />
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Pengaturan</h2>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Konfigurasi Sistem</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Notifikasi Email</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">Aktif</button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Backup Otomatis</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">Aktif</button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Mode Maintenance</span>
                  <button className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm">Nonaktif</button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Log Aktivitas</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">Aktif</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Keamanan</h3>
              <div className="space-y-4">
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-700">Ubah Password</span>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-700">Aktivasi 2FA</span>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-700">Riwayat Login</span>
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  const getModalContent = () => {
    switch (modalType) {
      case 'alumni':
        return (
          <AlumniForm
            alumni={selectedItem}
            onSave={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
          />
        );
      case 'berita':
        return (
          <BeritaForm
            berita={selectedItem}
            onSave={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
          />
        );
      case 'testimoni':
        return (
          <TestimoniForm
            testimoni={selectedItem}
            onSave={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
          />
        );
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    const action = selectedItem ? 'Edit' : 'Tambah';
    switch (modalType) {
      case 'alumni':
        return `${action} Alumni`;
      case 'berita':
        return `${action} Berita`;
      case 'testimoni':
        return `${action} Testimoni`;
      default:
        return '';
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-gradient-to-r from-green-500 to-blue-600">
          <h1 className="text-white text-lg font-bold">SMAIT Baitul 'Ilmi</h1>
        </div>
        
        <nav className="mt-5 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`group flex items-center w-full px-2 py-2 text-sm font-medium rounded-md mb-1 transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <Menu className="h-6 w-6" />
                </button>
                
                <div className="relative ml-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Cari data..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <img 
                      src="/images/profile.jpg"
                      alt="Profile" 
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-700 font-medium">{user.name}</span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setActiveTab('profile');
                            setShowUserMenu(false);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <User className="mr-3 h-4 w-4" />
                          Profile
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('settings');
                            setShowUserMenu(false);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Settings className="mr-3 h-4 w-4" />
                          Settings
                        </button>
                        <hr className="my-1" />
                        <button
                          onClick={logout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          <LogOut className="mr-3 h-4 w-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        title={getModalTitle()}
      >
        {getModalContent()}
      </Modal>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminPanel;