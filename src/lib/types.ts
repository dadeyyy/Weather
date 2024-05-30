type Feed = {
  created_at: string;
  entry_id: number;
  field3: string | null;
};

type Channel = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  field1: string;
  field2: string;
  field3: string;
  created_at: string;
  updated_at: string;
  last_entry_id: number;
};

export type WeighingRainGauge = {
  channel: Channel;
  feeds: Feed[];
};

type Feed1 = {
  created_at: string;
  entry_id: number;
  field1: string | null;
};

type Channel1 = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  field1: string;
  field2: string;
  field3: string;
  created_at: string;
  updated_at: string;
  last_entry_id: number;
};

export type WeighingRainGaugeGrams = {
  channel: Channel1;
  feeds: Feed1[];
};

type Feed2 = {
  created_at: string;
  entry_id: number;
  field2: string | null;
};

type Channel2 = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  field1: string;
  field2: string;
  field3: string;
  created_at: string;
  updated_at: string;
  last_entry_id: number;
};

export type WeighingRainGaugeMM = {
  channel: Channel2;
  feeds: Feed2[];
};
