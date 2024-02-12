import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface BookingChartProps {
  data: number[]; // Masukkan data persentase yang diinginkan
}

const BookingChart: React.FC<BookingChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Hancurkan grafik sebelumnya jika ada
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "line", // Mengganti jenis diagram menjadi garis
          data: {
            labels: ["1", "2", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k", "minggu", "senin", "selasa", "rabu"], // Perbarui labels
            datasets: [
              {
                data: data,
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                fill: false, // Menghilangkan area di bawah garis
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  stepSize: 20,
                  callback: (value) => `${value}%`,
                },
              },
            },
          },
        });
      }
    }

    // Membersihkan grafik saat komponen di-unmount atau saat data berubah
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="pt-3.5 bg-white">
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default BookingChart;
