'use client';

import { useCallback, useState } from 'react';
import { useForm } from '@mantine/form';
import { IBidRequest } from '@/shared/types';
import { postBidAction } from '@/entities/bid';
import { BidFormUi } from './bid-form-ui';
import { handleAfterPostBidAction } from './lib';

interface IFormValues extends Omit<IBidRequest, 'photo'> {}

export function BidForm() {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const handleSelectPhotoFile = useCallback(setPhotoFile, [setPhotoFile]);

  const form = useForm<IFormValues>({
    initialValues: {
      title: '',
      year_create: 1900,
      category: '',
      country: '',
      height: 100,
      width: 100,
      material_work: 'масло',
      material_tablet: 'холст',
      artist_name: '',
      artist_lastname: '',
      gender: '',
      age: 30,
      is_alive: true,
      count_title: 0,
      count_artist: 0,
      solo_shows: '',
      group_shows: '',
    },
  });

  const handleSubmit = useCallback(
    async (values: IFormValues) => {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('artist_name', values.artist_name);
      formData.append('artist_lastname', values.artist_lastname);
      formData.append('country', values.country);
      formData.append('material_work', values.material_work);
      formData.append('material_tablet', values.material_tablet);
      formData.append('category', values.category);
      formData.append('gender', values.gender);
      formData.append('solo_shows', values.solo_shows);
      formData.append('group_shows', values.group_shows);
      formData.append('age', String(values.age));
      formData.append('width', String(values.width));
      formData.append('height', String(values.height));
      formData.append('year_create', String(values.year_create));
      formData.append('count_title', String(values.count_title));
      formData.append('count_artist', String(values.count_artist));
      formData.append('is_alive', String(values.is_alive));

      if (photoFile) {
        formData.append('photo', photoFile);
      }
      console.log(`значение ${values.is_alive}`);
      const { data, error } = await postBidAction(formData);
      if (error) {
        console.log(error);
        return;
      }

      if (data) {
        handleAfterPostBidAction(data.id);
      }
    },
    [photoFile]
  );

  return (
    <BidFormUi
      {...{ form }}
      {...{ photoFile }}
      selectPhotoFile={handleSelectPhotoFile}
      handleSubmit={form.onSubmit(handleSubmit)}
    />
  );
}
