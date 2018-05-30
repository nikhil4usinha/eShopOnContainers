FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY src/Services/VehicleOrder/VehicleOrder.API.csproj src/Services/VehicleOrder/
RUN dotnet restore src/Services/VehicleOrder/VehicleOrder.API.csproj
COPY . .
WORKDIR /src/src/Services/VehicleOrder
RUN dotnet build VehicleOrder.API.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish VehicleOrder.API.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "VehicleOrder.API.dll"]
