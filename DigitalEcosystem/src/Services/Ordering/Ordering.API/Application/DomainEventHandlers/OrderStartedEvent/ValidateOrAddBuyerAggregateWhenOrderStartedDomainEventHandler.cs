﻿using MediatR;
using EY.Digital.Services.Ordering.API.Infrastructure.Services;
using EY.Digital.Services.Ordering.Domain.AggregatesModel.BuyerAggregate;
using Microsoft.Extensions.Logging;
using EY.Digital.Services.Ordering.Domain.Events;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace EY.Digital.Services.Ordering.API.Application.DomainEventHandlers.OrderStartedEvent
{
    public class ValidateOrAddBuyerAggregateWhenOrderStartedDomainEventHandler 
                        : INotificationHandler<OrderStartedDomainEvent>
    {
        private readonly ILoggerFactory _logger;
        private readonly IBuyerRepository _buyerRepository;
        private readonly IIdentityService _identityService;

        public ValidateOrAddBuyerAggregateWhenOrderStartedDomainEventHandler(ILoggerFactory logger, IBuyerRepository buyerRepository, IIdentityService identityService)
        {
            _buyerRepository = buyerRepository ?? throw new ArgumentNullException(nameof(buyerRepository));
            _identityService = identityService ?? throw new ArgumentNullException(nameof(identityService));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        public async Task Handle(OrderStartedDomainEvent orderStartedEvent, CancellationToken cancellationToken)
        {
            var cardTypeId = (orderStartedEvent.CardTypeId != 0) ? orderStartedEvent.CardTypeId : 1;
            var buyer = await _buyerRepository.FindAsync(orderStartedEvent.UserId);
            bool buyerOriginallyExisted = (buyer == null) ? false : true;

            if (!buyerOriginallyExisted)
            {                
                buyer = new Buyer(orderStartedEvent.UserId);
            }
            
            var buyerUpdated = buyerOriginallyExisted ? _buyerRepository.Update(buyer) : _buyerRepository.Add(buyer);

            await _buyerRepository.UnitOfWork
                .SaveEntitiesAsync();

            _logger.CreateLogger(nameof(ValidateOrAddBuyerAggregateWhenOrderStartedDomainEventHandler)).LogTrace($"Buyer {buyerUpdated.Id} and related payment method were validated or updated for orderId: {orderStartedEvent.Order.Id}.");
        }
    }
}
