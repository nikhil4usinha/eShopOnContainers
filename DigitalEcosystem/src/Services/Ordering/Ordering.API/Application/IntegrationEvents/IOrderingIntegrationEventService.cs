﻿using EY.Digital.Core.EventBus.Events;
using System.Threading.Tasks;

namespace EY.Digital.Services.Ordering.API.Application.IntegrationEvents
{
    public interface IOrderingIntegrationEventService
    {
        Task PublishThroughEventBusAsync(IntegrationEvent evt);
    }
}
