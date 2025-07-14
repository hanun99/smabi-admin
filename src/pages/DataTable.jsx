const [showModal, setShowModal] = useState(false);
const [modalType, setModalType] = useState('');
const [selectedItem, setSelectedItem] = useState(null);

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
                    onClick={() => onDelete && onDelete(item)}
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
            onDelete={(item) => console.log('Delete alumni:', item)}
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
            onDelete={(item) => console.log('Delete berita:', item)}
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
            onDelete={(item) => console.log('Delete testimoni:', item)}
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
                    <button className="p-2 text-green-500 hover:bg-green-100 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">Harian</button>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Penyimpanan Data</span>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm">365 Hari</button>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
    {/* Sidebar */}
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-green-500 to-blue-600">
        <div className="text-center">
          <h1 className="text-lg font-bold text-white">
            SMAIT Baitul 'Ilmi
          </h1>
          <p className="text-sm text-green-100">Admin Panel</p>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 hover:bg-white hover:bg-opacity-20 rounded-lg"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>

    {/* Main Content */}
    <div className="lg:ml-64">
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">Admin SMAIT</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-6">
        {renderContent()}
      </main>
    </div>

    {/* Mobile Overlay */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}

    {/* Modal */}
    <Modal 
      isOpen={showModal} 
      onClose={() => setShowModal(false)}
      title={modalType === 'alumni' ? 'Data Alumni' : 
             modalType === 'berita' ? 'Data Berita' : 
             modalType === 'testimoni' ? 'Data Testimoni' : 
             'Data Universitas'}
    >
      {modalType === 'alumni' && (
        <AlumniForm 
          alumni={selectedItem}
          onSave={(data) => {
            console.log('Save alumni:', data);
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
      {modalType === 'berita' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Judul Berita</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan judul berita"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Teks Berita</label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan isi berita"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gambar Berita</label>
            <div className="flex items-center space-x-3">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer flex items-center space-x-2"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Gambar</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dibuat Oleh</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="Nama pembuat"
            />
          </div>
          <div className="flex space-x-3 pt-4">
            <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300">
              Simpan
            </button>
            <button 
              onClick={() => setShowModal(false)}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </Modal>
  </div>
);


export default AdminPanel;