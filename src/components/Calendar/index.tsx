import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";
import { ptBR } from "./localeConfig";
import { DateCallbackHandler } from "react-native-calendars";

import { generateInterval } from "./generateInterfaval";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
  const { colors, fonts } = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={colors.text}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.text_detail,
        paddingBottom: 10,
        margin: 10,
      }}
      theme={{
        textDayFontFamily: fonts.primary_400,
        textDayHeaderFontFamily: fonts.primary_500,
        textDayHeaderFontSize: 10,
        monthTextColor: colors.title,
        textMonthFontFamily: fonts.secondary_600,
        textMonthFontSize: 20,
        arrowStyle: {
          marginHorizontal: -14,
        },
      }}
      firstDay={1}
      minDate={new Date().toLocaleDateString()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
};

export { Calendar, MarkedDateProps, DayProps, generateInterval };
