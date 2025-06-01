interface Activity {
  id: number;
  description: string;
  time: string;
  user: {
    name: string;
    avatar: string;
  };
}

const mockActivities: Activity[] = [
  {
    id: 1,
    description:
      'Species baru "Orangutan kalimantan" ditambahkan oleh Dr. Siti Sutarih',
    time: "2 jam yang lalu",
    user: {
      name: "Dr. Siti Sutarih",
      avatar: "/avatars/user1.jpg",
    },
  },
  {
    id: 2,
    description: 'Data genetik "Stress Response" diperbarui',
    time: "3 jam yang lalu",
    user: {
      name: "Prof. Ahmad",
      avatar: "/avatars/user2.jpg",
    },
  },
  {
    id: 3,
    description: 'Pengajuan item "Macan Fosil" menunggu setujui reviewer',
    time: "5 jam yang lalu",
    user: {
      name: "Dr. Maya",
      avatar: "/avatars/user3.jpg",
    },
  },
];

export function LatestActivities() {
  return (
    <div className="space-y-4">
      {mockActivities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start space-x-4 p-3 hover:bg-emerald-800/30 rounded-lg border border-emerald-800"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-800 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-emerald-100">{activity.description}</p>
            <p className="text-xs text-emerald-400 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
