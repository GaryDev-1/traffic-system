import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const TrafficChart = () => {
  const data = [
    { time: '06:00', vehicles: 8 },
    { time: '07:00', vehicles: 12 },
    { time: '08:00', vehicles: 15 },
    { time: '09:00', vehicles: 18 },
    { time: '10:00', vehicles: 15 },
    { time: '11:00', vehicles: 13 }
  ]

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-base-content/20" />
          <XAxis dataKey="time" className="text-base-content/60" />
          <YAxis className="text-base-content/60" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--b1))',
              border: 'none',
              borderRadius: '0.5rem'
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="vehicles" 
            stroke="hsl(var(--p))" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrafficChart