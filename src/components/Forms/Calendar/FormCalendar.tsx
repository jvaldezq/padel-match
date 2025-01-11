'use client';

import dayjs from 'dayjs';
import { CalendarIcon } from 'lucide-react';
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { InputWrapper, InputWrapperProps } from '../InputWrapper';
import { CombinedInputProps } from '../types';

export interface FormCalendarProps
  extends CombinedInputProps<string>,
    Omit<InputWrapperProps, 'children'>,
    Omit<
      InputHTMLAttributes<HTMLButtonElement>,
      'label' | 'name' | 'onChange'
    > {
  onFilter?: (value: string, key: string) => void;
  hidden?: boolean;
}

export const FormCalendar = forwardRef(
  (props: FormCalendarProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      label,
      labelClassName,
      labelPosition,
      loading,
      name,
      placeholder,
      input,
      meta,
      wrapperClassName,
      childrenClassName,
      onFilter,
      hidden = false,
      disabled,
    } = props;
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [open, setOpen] = useState(false);
    const { onChange } = input;

    useEffect(() => {
      if (input?.value) {
        setDate(new Date(input?.value));
      }
    }, [input]);

    if (hidden) return null;

    return (
      <InputWrapper
        name={name}
        label={label}
        labelClassName={labelClassName}
        labelPosition={labelPosition}
        loading={loading}
        wrapperClassName={wrapperClassName}
        childrenClassName={childrenClassName}
        meta={meta}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              disabled={disabled}
              variant={'outline'}
              className={cn(
                'w-full pl-3 text-left font-normal',
                date ? 'bg-success/[0.1]' : undefined,
              )}
              ref={ref}
            >
              {date ? dayjs(date).format('YYYY MMM DD') : placeholder}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                const newDate = dayjs(date).format('YYYY-MM-DDTHH:mm:ss');
                setDate(date);
                onChange(newDate);
                setOpen(false);
                onFilter?.(newDate, name);
              }}
            />
          </PopoverContent>
        </Popover>
      </InputWrapper>
    );
  },
);

FormCalendar.displayName = 'FormCalendar';
